// components/CommunicationPanel.jsx
import { useState, useEffect, useRef } from 'react';
import { languages } from './LanguageData';

export default function CommunicationPanel() {
  const [isListening, setIsListening] = useState(false);
  const [userText, setUserText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [userLanguage, setUserLanguage] = useState('en');
  const [targetLanguage, setTargetLanguage] = useState('es');
  const [conversationMode, setConversationMode] = useState('speech');
  const [isTranslating, setIsTranslating] = useState(false); // New state for translation status
  const recognitionRef = useRef(null);

  // Speech recognition setup
  useEffect(() => {
    if ('webkitSpeechRecognition' in window) {
      recognitionRef.current = new window.webkitSpeechRecognition();
      recognitionRef.current.continuous = true;
      recognitionRef.current.interimResults = true;
      
      recognitionRef.current.onresult = (event) => {
        const transcript = Array.from(event.results)
          .map(result => result[0])
          .map(result => result.transcript)
          .join('');
        setUserText(transcript);
      };
      
      recognitionRef.current.onerror = (event) => {
        console.error('Speech recognition error', event.error);
      };
    }
  }, []);

  const toggleListening = () => {
    if (isListening) {
      recognitionRef.current.stop();
    } else {
      recognitionRef.current.start();
    }
    setIsListening(!isListening);
  };

  const handleTranslate = async () => {
    if (!userText.trim()) return; // Don't translate empty text
    
    setIsTranslating(true);
    try {
      const response = await translateText(userText, userLanguage, targetLanguage);
      setTranslatedText(response);
      speak(response, targetLanguage);
    } catch (error) {
      console.error('Translation error:', error);
      setTranslatedText('Translation failed. Please try again.');
    } finally {
      setIsTranslating(false);
    }
  };

  const speak = (text, lang) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    window.speechSynthesis.speak(utterance);
  };

  const handleQuickResponse = (response) => {
    setUserText(response);
    handleTranslate();
  };

  return (
    <div className="communication-panel">
      <div className="language-selectors">
        <select 
          value={userLanguage} 
          onChange={(e) => setUserLanguage(e.target.value)}
        >
          {languages.map(lang => (
            <option key={lang.code} value={lang.code}>{lang.name}</option>
          ))}
        </select>
        <span>→</span>
        <select 
          value={targetLanguage} 
          onChange={(e) => setTargetLanguage(e.target.value)}
        >
          {languages.map(lang => (
            <option key={lang.code} value={lang.code}>{lang.name}</option>
          ))}
        </select>
      </div>

      <div className="mode-toggle">
        <button 
          className={conversationMode === 'speech' ? 'active' : ''}
          onClick={() => setConversationMode('speech')}
        >
          Speech Mode
        </button>
        <button 
          className={conversationMode === 'text' ? 'active' : ''}
          onClick={() => setConversationMode('text')}
        >
          Text Mode
        </button>
      </div>

      {conversationMode === 'speech' && (
        <div className="speech-section">
          <button 
            className={`mic-button ${isListening ? 'listening' : ''}`}
            onClick={toggleListening}
          >
            {isListening ? 'Stop Listening' : 'Start Speaking'}
          </button>
          <div className="transcript">{userText}</div>
        </div>
      )}

      {conversationMode === 'text' && (
        <div className="text-section">
          <textarea 
            value={userText}
            onChange={(e) => setUserText(e.target.value)}
            placeholder="Type your message..."
          />
        </div>
      )}

      {/* New Start Translation Button */}
      <button 
        className={`translate-button ${isTranslating ? 'translating' : ''}`}
        onClick={handleTranslate}
        disabled={!userText.trim() || isTranslating}
      >
        {isTranslating ? 'Translating...' : 'Start Translation'}
      </button>

      <div className="translation-result">
        <h4>Translated Message:</h4>
        <p>{translatedText}</p>
        {translatedText && (
          <button onClick={() => speak(translatedText, targetLanguage)}>
            Repeat Translation
          </button>
        )}
      </div>

      <div className="quick-responses">
        <h4>Quick Responses:</h4>
        <div className="response-buttons">
          <button onClick={() => handleQuickResponse("Yes")}>Yes</button>
          <button onClick={() => handleQuickResponse("No")}>No</button>
          <button onClick={() => handleQuickResponse("Thank you")}>Thank you</button>
          <button onClick={() => handleQuickResponse("I need help")}>Help</button>
        </div>
      </div>
    </div>
  );
}

// Mock translation function
async function translateText(text, fromLang, toLang) {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  return `[Translated from ${fromLang} to ${toLang}]: ${text}`;
}