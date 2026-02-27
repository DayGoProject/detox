import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function QuestSelection({ onSelectQuest, onBack }) {
    const { t, i18n } = useTranslation();

    // 15-minute timer logic
    const RESET_INTERVAL_MS = 15 * 60 * 1000;
    const [timeLeft, setTimeLeft] = useState(RESET_INTERVAL_MS);
    const [randomQuests, setRandomQuests] = useState([]);

    // Get quest types from i18n
    const allQuestKeys = Object.keys(t('questTypes', { returnObjects: true }) || {});

    // Function to shuffle and pick 3 quests
    const generateRandomQuests = () => {
        if (allQuestKeys.length === 0) return [];
        const shuffled = [...allQuestKeys].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 3);
    };

    // Initialization & Timer
    useEffect(() => {
        if (allQuestKeys.length > 0 && randomQuests.length === 0) {
            setRandomQuests(generateRandomQuests());
        }

        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev <= 1000) {
                    setRandomQuests(generateRandomQuests());
                    return RESET_INTERVAL_MS;
                }
                return prev - 1000;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [i18n.language, allQuestKeys.length]); // re-run if needed

    const formatTime = (ms) => {
        const totalSeconds = Math.floor(ms / 1000);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    return (
        <div className="bg-ink-black text-white min-h-screen flex flex-col font-sans relative selection:bg-amber-accent selection:text-white pb-16">
            <div className="fixed top-0 w-full bg-ink-black/95 backdrop-blur-sm z-20 border-b border-white/10">
                <div className="flex items-center justify-between p-4">
                    <button onClick={onBack} className="size-12 border border-white/20 bg-transparent text-white flex items-center justify-center hover:bg-white hover:text-ink-black transition-colors group">
                        <span className="material-symbols-outlined text-[28px] group-hover:-translate-x-1 transition-transform">arrow_back</span>
                    </button>
                    <div className="text-right">
                        <p className="font-display font-bold uppercase text-xs tracking-widest text-gray-400">{t('quests.timeRemaining', 'Quests reset in')}</p>
                        <p className="font-mono font-bold text-xl text-amber-accent font-display">{formatTime(timeLeft)}</p>
                    </div>
                </div>
                <div className="px-6 pb-4">
                    <h1 className="font-display text-4xl font-bold uppercase tracking-tighter leading-none mt-2">
                        {t('quests.emergencyDetox', 'Emergency Detox')}
                    </h1>
                    <p className="text-gray-400 font-medium mt-2 leading-tight">
                        {t('quests.instruction', 'Select a physical constraint to bypass the dopamine blocker.')}
                    </p>
                </div>
            </div>

            <main className="pt-48 pb-24 px-4 overflow-y-auto custom-scrollbar">
                <div className="space-y-6 max-w-md mx-auto relative z-10">

                    {randomQuests.map((questKey) => {
                        const quest = t(`questTypes.${questKey}`, { returnObjects: true });
                        return (
                            <div key={questKey} className="relative group perspective-1000">
                                <div className="absolute inset-0 bg-white/5 translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300"></div>
                                <div className="relative border border-white/20 bg-[#171717] p-5 flex flex-col gap-4 transform transition-colors duration-300 group-hover:-translate-y-1 hover:border-amber-accent/50 hover:bg-[#1a1a1a]">
                                    <div className="flex justify-between items-start">
                                        <div className="flex items-center gap-3">
                                            <span className="material-symbols-outlined text-[32px] text-amber-accent/80 group-hover:text-amber-accent transition-colors">{quest.img}</span>
                                            <h2 className="font-display text-2xl font-bold uppercase leading-none">{quest.title}</h2>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between mb-1 mt-1">
                                        <span className="px-2 py-0.5 bg-white/5 text-xs font-bold text-gray-400 uppercase border border-white/10">{quest.category}</span>
                                        <div className="bg-amber-accent/10 px-2 py-1 border border-amber-accent/20 text-amber-accent font-bold flex items-center gap-1 shrink-0">
                                            <span className="material-symbols-outlined text-[16px]">bolt</span>
                                            <span>+{quest.xp}</span>
                                        </div>
                                    </div>
                                    <p className="text-gray-400 font-medium leading-relaxed text-sm">
                                        {quest.desc}
                                    </p>
                                    <button
                                        onClick={() => onSelectQuest({
                                            id: questKey,
                                            title: quest.title,
                                            type: questKey,
                                            xp: quest.xp
                                        })}
                                        className="w-full mt-2 py-4 bg-amber-accent text-ink-black font-display font-bold uppercase tracking-widest hover:bg-[#F4BB33] transition-colors flex items-center justify-center gap-2 active:scale-[0.98]"
                                    >
                                        <span>{t('quests.begin', 'Begin Constraint')}</span>
                                        <span className="material-symbols-outlined text-lg">arrow_forward</span>
                                    </button>
                                </div>
                            </div>
                        );
                    })}

                </div>
            </main>
        </div>
    );
}
