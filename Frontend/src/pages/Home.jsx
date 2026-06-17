import React, { useState, useRef, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { base44 } from '@/api/base44Client';
import { RotateCcw } from 'lucide-react';

import ChatMessage from '@/components/chat/ChatMessage';
import ChatInput from '@/components/chat/ChatInput';
import TypingIndicator from '@/components/chat/TypingIndicator';
import DisclaimerBanner from '@/components/chat/DisclaimerBanner';
import QuickPrompts from '@/components/chat/QuickPrompts';

const EN_PROMPTS = [
  "My beans have yellow spots — what do I do?",
  "Best organic pest control for tomatoes?",
  "How to store rajma after harvest?",
  "When to plant mandua (finger millet)?",
];

const HI_PROMPTS = [
  "मेरी फलियों पर पीले धब्बे हैं — मैं क्या करूं?",
  "टमाटर के लिए सबसे अच्छा जैविक कीट नियंत्रण?",
  "राजमा की कटाई के बाद भंडारण कैसे करें?",
  "मंडुआ (फिंगर मिलेट) कब लगाएं?",
];

const SYSTEM_PROMPT_EN = `You are PahadiCrope, a practical agricultural advisor for Mandakini Organic Produce Collective in Uttarakhand, India.

ROLE: Provide actionable crop advisory to field supervisors managing mountain/hill farms (800–3000m elevation) in the Mandakini valley and surrounding Garhwal Himalaya region.

SCOPE — answer ONLY about:
• Crop diseases (identification, causes, organic & chemical treatment)
• Pest management (identification, IPM strategies, bio-controls, local remedies)
• Post-harvest handling (drying, storage, grading, transport for mountain terrain)
• Planting calendars & crop rotation for Pahadi crops
• Soil health, composting, and organic inputs suited to mountain soils
• Irrigation & water management for terraced fields

CROPS IN FOCUS: Rajma (kidney beans), mandua (finger millet), jhangora (barnyard millet), amaranth, paddy (basmati & local varieties), wheat, barley, potato, peas, garlic, ginger, turmeric, tomato, capsicum, cabbage, cauliflower, radish, spinach, apple, walnut, peach, plum, citrus (malta, lemon), and local herbs/spices.

RESPONSE STYLE:
1. Diagnose first — ask clarifying questions if the query is vague.
2. Give step-by-step practical actions.
3. Prefer organic / locally available solutions; mention chemical options only when necessary and note safety precautions.
4. Use simple English; avoid jargon unless defining it.
5. Always end with a reminder to verify advice with a licensed agricultural extension officer.

BOUNDARIES:
• Do NOT provide advice on non-agricultural topics. If asked, politely decline and redirect to crop advisory.
• If asked about crops/regions outside your scope, state your limitation politely.
• Never invent information — say "I'm not sure" when uncertain.
• Do NOT provide medical, legal, or financial advice.`;

const SYSTEM_PROMPT_HI = `तुम PahadiCrope हो, उत्तराखंड, भारत में मंदाकिनी ऑर्गेनिक प्रोड्यूस कलेक्टिव के लिए एक व्यावहारिक कृषि सलाहकार।

भूमिका: मंदाकिनी घाटी और आसपास के गढ़वाल हिमालय क्षेत्र में पर्वतीय/पहाड़ी खेतों (800–3000 मीटर ऊंचाई) का प्रबंधन करने वाले फील्ड सुपरवाइज़रों को कार्रवाई योग्य फसल सलाह प्रदान करें।

दायरा — केवल इन विषयों पर उत्तर दें:
• फसल रोग (पहचान, कारण, जैविक और रासायनिक उपचार)
• कीट प्रबंधन (पहचान, IPM रणनीतियाँ, जैव-नियंत्रण, स्थानीय उपाय)
• कटाई के बाद प्रबंधन (सुखाना, भंडारण, ग्रेडिंग, पर्वतीय इलाके के लिए परिवहन)
• पहाड़ी फसलों के लिए रोपण कैलेंडर और फसल चक्र
• मृदा स्वास्थ्य, कम्पोस्टिंग, और पर्वतीय मिट्टी के लिए उपयुक्त जैविक इनपुट
• सीढ़ीदार खेतों के लिए सिंचाई और जल प्रबंधन

प्रमुख फसलें: राजमा, मंडुआ (फिंगर मिलेट), झंगोरा (बार्नयार्ड मिलेट), अमरंथ, धान (बासमती और स्थानीय किस्में), गेहूं, जौ, आलू, मटर, लहसुन, अदरक, हल्दी, टमाटर, शिमला मिर्च, पत्ता गोभी, फूल गोभी, मूली, पालक, सेब, अखरोट, आड़ू, आलूबुखारा, सिट्रस (माल्टा, नींबू), और स्थानीय जड़ी-बूटियाँ/मसाले।

उत्तर शैली:
1. पहले निदान करें — यदि प्रश्न अस्पष्ट है तो स्पष्ट प्रश्न पूछें।
2. चरण-दर-चरण व्यावहारिक कार्रवाई बताएं।
3. जैविक/स्थानीय रूप से उपलब्ध समाधानों को प्राथमिकता दें; रासायनिक विकल्प केवल आवश्यक होने पर बताएं और सुरक्षा सावधानियाँ नोट करें।
4. सरल हिंदी का प्रयोग करें; जटिल शब्दों से बचें।
5. हमेशा अंत में याद दिलाएं कि सलाह को लाइसेंस प्राप्त कृषि विस्तार अधिकारी से सत्यापित कराएं।

सीमाएं:
• गैर-कृषि विषयों पर सलाह न दें। पूछे जाने पर विनम्रता से मना करें।
• अपने दायरे से बाहर की फसलों/क्षेत्रों के बारे में पूछे जाने पर विनम्रता से अपनी सीमा बताएं।
• कभी भी जानकारी गढ़कर न बनाएं — अनिश्चित होने पर "मुझे यकीन नहीं है" कहें।
• चिकित्सा, कानूनी, या वित्तीय सलाह न दें।`;

export default function Home() {
  const {
    conversations,
    activeId,
    setActiveId,
    language,
    refreshConversations,
  } = useOutletContext();

  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [conversationId, setConversationId] = useState(null);
  const [initialLoadDone, setInitialLoadDone] = useState(false);
  const scrollRef = useRef(null);

  // Load conversation when activeId changes
  useEffect(() => {
    if (activeId) {
      base44.entities.Conversation.list().then((list) => {
        const conv = list?.find((c) => c.id === activeId);
        if (conv) {
          setMessages(conv.messages || []);
          setConversationId(conv.id);
        }
        setInitialLoadDone(true);
      });
    } else {
      setMessages([]);
      setConversationId(null);
      setInitialLoadDone(true);
    }
  }, [activeId]);

  // Scroll to bottom on new messages
  useEffect(() => {
    if (scrollRef.current) {
      const el = scrollRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (el) {
        requestAnimationFrame(() => {
          el.scrollTop = el.scrollHeight;
        });
      }
    }
  }, [messages, isLoading]);

  // Generate title from first user message
  const generateTitle = (content) => {
    const cleaned = content.trim();
    return cleaned.length > 40 ? cleaned.slice(0, 40) + '...' : cleaned;
  };

  const sendMessage = async (content) => {
    const userMessage = { role: 'user', content };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setIsLoading(true);

    const systemPrompt = language === 'hi' ? SYSTEM_PROMPT_HI : SYSTEM_PROMPT_EN;
    const conversationHistory = updatedMessages
      .map((m) => `${m.role === 'user' ? (language === 'hi' ? 'किसान' : 'User') : 'PahadiCrope'}: ${m.content}`)
      .join('\n\n');

    const fullPrompt = `${systemPrompt}\n\n--- CONVERSATION ---\n${conversationHistory}\n\nPahadiCrope:`;

    let convId = conversationId;

    try {
      // Create conversation on first message if new chat
      if (!convId) {
        const newConv = await base44.entities.Conversation.create({
          title: generateTitle(content),
          messages: updatedMessages,
          language,
        });
        convId = newConv.id;
        setConversationId(convId);
        setActiveId(convId);
        refreshConversations();
      } else {
        // Update existing conversation with current messages (will add assistant response after)
        await base44.entities.Conversation.update(convId, {
          title: messages.length === 0 ? generateTitle(content) : undefined,
          messages: updatedMessages,
          language,
        });
      }

      const response = await base44.integrations.Core.InvokeLLM({
        prompt: fullPrompt,
        model: 'gemini_3_flash',
      });

      const finalMessages = [...updatedMessages, { role: 'assistant', content: response }];
      setMessages(finalMessages);

      // Save final messages
      await base44.entities.Conversation.update(convId, {
        messages: finalMessages,
        title: updatedMessages.length === 1 ? generateTitle(content) : undefined,
      });
      refreshConversations();
    } catch {
      const errorMsg = language === 'hi'
        ? 'क्षमा करें — मैं अभी आपका प्रश्न प्रोसेस नहीं कर पाया। कृपया थोड़ी देर बाद पुनः प्रयास करें, या तुरंत सहायता के लिए अपने स्थानीय कृषि विस्तार अधिकारी से संपर्क करें।'
        : 'I apologize — I was unable to process your query right now. Please try again in a moment, or contact your local agricultural extension officer for immediate assistance.';
      const errorMessages = [...updatedMessages, { role: 'assistant', content: errorMsg }];
      setMessages(errorMessages);

      if (convId) {
        await base44.entities.Conversation.update(convId, { messages: errorMessages });
        refreshConversations();
      }
    } finally {
      setIsLoading(false);
    }
  };

  const resetChat = () => {
    setMessages([]);
    setConversationId(null);
    setActiveId(null);
  };

  const prompts = language === 'hi' ? HI_PROMPTS : EN_PROMPTS;

  if (!initialLoadDone) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-primary rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <>
      {/* Compact header */}
      <header className="flex-shrink-0 border-b border-border bg-card/80 backdrop-blur-sm px-4 py-2.5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-muted-foreground">
              {language === 'en' ? 'Crop Advisory Chatbot' : 'फसल सलाह चैटबॉट'}
            </p>
          </div>
          <div className="flex items-center gap-1">
            {(messages.length > 0 || conversationId) && (
<button
  onClick={resetChat}
  className="inline-flex items-center gap-1.5 h-8 px-2 text-xs rounded-lg text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
>
  <RotateCcw className="w-3 h-3" />
  {language === 'en' ? 'New' : 'नई'}
</button>
            )}
          </div>
        </div>
      </header>

      {/* Chat area */}
      <div className="flex-1 overflow-hidden">
        <div className="h-full flex flex-col">
<div
  ref={scrollRef}
  className="flex-1 px-4 overflow-y-auto overflow-x-hidden scroll-smooth"
>            <div className="py-4 space-y-4">
              <DisclaimerBanner language={language} />

              {messages.length === 0 && (
                <div className="flex flex-col items-center justify-center py-10 gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <span className="text-3xl">{language === 'hi' ? '🌾' : '🌱'}</span>
                  </div>
                  <div className="text-center space-y-1">
                    <h2 className="font-heading text-lg font-bold">
                      {language === 'hi' ? 'नमस्ते! 🙏' : 'Namaste! 🙏'}
                    </h2>
                    <p className="text-sm text-muted-foreground max-w-xs">
                      {language === 'hi'
                        ? 'मैं आपका पहाड़ी फसल सलाहकार हूं। उत्तराखंड के पर्वतीय खेतों के लिए रोग, कीट, कटाई-पश्चात प्रबंधन, या रोपण के बारे में पूछें।'
                        : "I'm your Pahadi crop advisor. Ask me about diseases, pests, post-harvest handling, or planting for Uttarakhand's mountain farms."}
                    </p>
                  </div>
                  <QuickPrompts prompts={prompts} onSelect={sendMessage} />
                </div>
              )}

              {messages.map((msg, i) => (
                <ChatMessage key={i} message={msg} language={language} />
              ))}

              {isLoading && <TypingIndicator />}
            </div>
          </div>

          {/* Input */}
          <div className="flex-shrink-0 px-4 pb-4 pt-2">
            <ChatInput onSend={sendMessage} isLoading={isLoading} language={language} />
            <p className="text-[10px] text-muted-foreground text-center mt-2">
              {language === 'hi'
                ? 'AI-जनित सलाह — हमेशा लाइसेंस प्राप्त विस्तार अधिकारी से सत्यापित करें'
                : 'AI-generated advice — always verify with a licensed extension officer'}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}