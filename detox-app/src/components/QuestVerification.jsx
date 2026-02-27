import React from 'react';
import { useTranslation } from 'react-i18next';

export default function QuestVerification({ onBack, onCompleteQuest, quest }) {
    const { t } = useTranslation();

    // Determine quest name translation key based on selected quest
    let questNameKey = 'verification.natureQuest';
    if (quest === 'walk') questNameKey = 'verification.walkQuest';
    if (quest === 'squats') questNameKey = 'verification.squatQuest';

    return (
        <div className="dark h-full w-full">
            <div className="bg-black font-display text-white min-h-[100dvh] flex flex-col overflow-hidden relative">
                <div className="flex items-center justify-between p-6 pt-8 z-20 absolute top-0 w-full pointer-events-none">
                    <button
                        onClick={onBack}
                        className="pointer-events-auto flex size-10 items-center justify-center rounded-full bg-black/10 backdrop-blur-sm text-white/80 hover:bg-black/30 transition-colors"
                    >
                        <span className="material-symbols-outlined text-xl">arrow_back</span>
                    </button>
                    <div className="flex flex-col items-center pointer-events-auto">
                        <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-primary/80 mb-1">{t('verification.currentQuest')}</span>
                        <span className="text-white text-sm font-bold tracking-tight">{t(questNameKey)}</span>
                    </div>
                    <button className="pointer-events-auto flex size-10 items-center justify-center rounded-full bg-black/10 backdrop-blur-sm text-white/80 hover:bg-black/30 transition-colors">
                        <span className="material-symbols-outlined text-xl">more_horiz</span>
                    </button>
                </div>

                <div className="relative w-full h-full grow flex flex-col pt-20">
                    <div
                        className="absolute inset-0 bg-center bg-cover z-0"
                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDjPrxDAdM4O31LUQlTSIm8ndRWmeg8JasuNj-50x5pz8p-CJCyUQ4br0UikjA-pRlHfNAFOjFAOY2K7irK6EKp7d3YenWjCDlwivoBtQ9YMBKbPLp8qgJWqECMvTya1nfXNQlVubDZ7hXpDDokLn3jx9BaHmcNF_UJIq38BU6qbiC0wuRInfFkli4Dpr-6ftKc1idsfb418lNa_pgRVyTb_PWfHvgVU7JoQpd9gZ5n9hY5bp1lR2Aj-1fKF8uaCz-2V8G3vV3NjRY")' }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80 z-0 pointer-events-none"></div>

                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="w-[70%] aspect-[3/4] border-[0.5px] border-[#D97706] opacity-80 relative">
                                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#D97706]"></div>
                                <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#D97706]"></div>
                                <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#D97706]"></div>
                                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#D97706]"></div>

                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2">
                                    <div className="absolute top-1/2 left-0 w-full h-[0.5px] bg-[#D97706]/50"></div>
                                    <div className="absolute top-0 left-1/2 h-full w-[0.5px] bg-[#D97706]/50"></div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute top-[20%] left-0 w-full text-center pointer-events-none z-10">
                            <h2 className="text-white/90 text-sm uppercase tracking-[0.3em] font-medium drop-shadow-md">{t('verification.proofOfLife')}</h2>
                        </div>
                    </div>

                    <div className="grow"></div>

                    <div className="relative z-10 w-full flex flex-col items-center pb-10 pt-4 px-8 mt-auto">
                        <div className="w-full max-w-[200px] mb-10 flex flex-col items-center gap-2">
                            <div className="flex w-full justify-between items-end px-1">
                                <span className="text-[10px] text-white/60 uppercase tracking-widest">{t('verification.scanning')}</span>
                                <span className="text-[10px] text-primary font-bold">75%</span>
                            </div>
                            <div className="h-[2px] w-full bg-white/20">
                                <div className="h-full bg-primary w-3/4 shadow-[0_0_15px_rgba(217,119,6,0.6)]"></div>
                            </div>
                        </div>

                        <div className="flex items-center justify-center w-full relative">
                            <button className="absolute left-4 opacity-50 hover:opacity-100 transition-opacity">
                                <span className="material-symbols-outlined text-white text-2xl font-light">tune</span>
                            </button>
                            <button
                                onClick={onCompleteQuest}
                                className="relative flex items-center justify-center size-20 rounded-full group"
                            >
                                <div className="absolute inset-0 rounded-full border border-white/30 group-hover:border-white/60 transition-colors duration-300"></div>
                                <div className="size-16 bg-white rounded-full group-active:scale-95 transition-transform duration-200 shadow-lg"></div>
                            </button>
                            <button className="absolute right-4 opacity-50 hover:opacity-100 transition-opacity">
                                <span className="material-symbols-outlined text-white text-2xl font-light">photo_library</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
