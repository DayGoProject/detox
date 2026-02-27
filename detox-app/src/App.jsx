import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Dashboard from './components/Dashboard';
import QuestSelection from './components/QuestSelection';
import QuestVerification from './components/QuestVerification';
import GuardianDetails from './components/GuardianDetails';
import Forest from './components/Forest';
import Profile from './components/Profile';
import Menu from './components/Menu';
import MenuPages from './components/MenuPages';

function App() {
  const [currentScreen, setCurrentScreen] = useState('dashboard');
  const [selectedQuest, setSelectedQuest] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Tab can be: 'dashboard', 'quests', 'guardian', 'forest', 'profile'

  const handleTabChange = (tab) => {
    setCurrentScreen(tab);
  };

  const handleSelectQuest = (quest) => {
    setSelectedQuest(quest);
    setCurrentScreen('verification');
  };

  const handleCompleteQuest = () => {
    setSelectedQuest(null);
    setCurrentScreen('dashboard');
  };

  // Hide bottom nav on specific screens
  const hiddenNavScreens = ['verification', 'settings', 'history', 'friends', 'help'];

  // The bottom navigation bar
  const BottomNav = () => {
    if (hiddenNavScreens.includes(currentScreen)) return null;

    return (
      <nav className="fixed bottom-0 w-full bg-white border-t-2 border-ink-black z-50 pb-safe">
        <div className="flex justify-between items-stretch h-16">
          <button
            onClick={() => handleTabChange('dashboard')}
            className={`flex-1 flex flex-col items-center justify-center gap-1 border-r border-ink-black group ${currentScreen === 'dashboard' ? 'bg-amber-50' : 'hover:bg-gray-50'}`}
          >
            <span className={`material-symbols-outlined text-[24px] ${currentScreen === 'dashboard' ? 'text-ink-black' : 'text-stone-gray'} group-hover:text-ink-black transition-colors`}>home</span>
          </button>
          <button
            onClick={() => handleTabChange('quests')}
            className={`flex-1 flex flex-col items-center justify-center gap-1 border-r border-ink-black group ${currentScreen === 'quests' ? 'bg-amber-50' : 'hover:bg-gray-50'}`}
          >
            <span className={`material-symbols-outlined text-[24px] ${currentScreen === 'quests' ? 'text-ink-black' : 'text-stone-gray'} group-hover:text-ink-black transition-colors`}>map</span>
          </button>
          <div className="w-20 relative">
            <button
              onClick={() => handleTabChange('guardian')}
              className={`absolute -top-6 left-1/2 -translate-x-1/2 size-14 ${currentScreen === 'guardian' ? 'bg-[#FFC439]' : 'bg-amber-accent'} border-2 border-ink-black shadow-kinetic flex items-center justify-center hover:translate-y-1 hover:shadow-kinetic-sm transition-all text-ink-black`}
            >
              <span className="material-symbols-outlined text-[28px] font-bold">spa</span>
            </button>
          </div>
          <button
            onClick={() => handleTabChange('forest')}
            className={`flex-1 flex flex-col items-center justify-center gap-1 border-r border-ink-black border-l group ${currentScreen === 'forest' ? 'bg-amber-50' : 'hover:bg-gray-50'}`}
          >
            <span className={`material-symbols-outlined text-[24px] ${currentScreen === 'forest' ? 'text-ink-black' : 'text-stone-gray'} group-hover:text-ink-black transition-colors`}>forest</span>
          </button>
          <button
            onClick={() => handleTabChange('profile')}
            className={`flex-1 flex flex-col items-center justify-center gap-1 group ${currentScreen === 'profile' ? 'bg-amber-50' : 'hover:bg-gray-50'}`}
          >
            <span className={`material-symbols-outlined text-[24px] ${currentScreen === 'profile' ? 'text-ink-black' : 'text-stone-gray'} group-hover:text-ink-black transition-colors`}>person</span>
          </button>
        </div>
        <div className="h-6 bg-white w-full border-t border-ink-black"></div>
      </nav>
    );
  };

  return (
    <div className="w-full h-full min-h-screen">
      <Menu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onNavigate={handleTabChange}
      />

      {currentScreen === 'dashboard' && (
        <Dashboard
          onNavigateToQuests={() => handleTabChange('quests')}
          onOpenMenu={() => setIsMenuOpen(true)}
        />
      )}
      {currentScreen === 'quests' && (
        <QuestSelection
          onSelectQuest={handleSelectQuest}
          onBack={() => handleTabChange('dashboard')}
        />
      )}
      {currentScreen === 'verification' && (
        <QuestVerification
          onCompleteQuest={handleCompleteQuest}
          onBack={() => handleTabChange('quests')}
          quest={selectedQuest}
        />
      )}
      {currentScreen === 'guardian' && (
        <GuardianDetails />
      )}
      {currentScreen === 'forest' && (
        <Forest />
      )}
      {currentScreen === 'profile' && (
        <Profile />
      )}

      {/* Menu Sub-pages */}
      {['settings', 'history', 'friends', 'help'].includes(currentScreen) && (
        <MenuPages
          page={currentScreen}
          onBack={() => handleTabChange('dashboard')}
        />
      )}

      <BottomNav />
    </div>
  );
}

export default App;
