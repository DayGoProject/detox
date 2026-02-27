import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Dashboard({ onNavigateToQuests, onOpenMenu }) {
    const { t } = useTranslation();

    return (
        <div className="bg-off-white text-ink-black min-h-screen flex flex-col overflow-hidden relative selection:bg-amber-accent selection:text-white pb-16">
            <main className="flex-1 overflow-y-auto scrollbar-hide pb-24">
                <div className="flex items-center px-6 pt-12 pb-6 justify-between border-b border-ink-black sticky top-0 z-20 bg-off-white/95 backdrop-blur-sm">
                    <button onClick={onOpenMenu} className="text-ink-black flex size-10 items-center justify-center border-2 border-transparent hover:border-ink-black transition-all">
                        <span className="material-symbols-outlined text-[32px] font-light">menu</span>
                    </button>
                    <h2 className="text-ink-black text-xl font-display font-bold uppercase tracking-widest">
                        {t('app.title')}<span className="text-amber-accent">.</span>
                    </h2>
                    <div className="flex items-center gap-2">
                        <button className="flex size-10 items-center justify-center relative border-2 border-transparent hover:border-ink-black transition-all">
                            <span className="material-symbols-outlined text-[28px]">notifications</span>
                            <span className="absolute top-2 right-2 w-2 h-2 bg-amber-accent"></span>
                        </button>
                    </div>
                </div>

                <div className="px-6 py-10 border-b border-ink-black">
                    <div className="flex justify-between items-end mb-2">
                        <span className="font-display font-bold uppercase text-xs tracking-[0.2em] text-stone-gray">
                            {t('dashboard.detoxTimer')}
                        </span>
                        <div className="flex items-center gap-1 text-amber-accent animate-pulse">
                            <span className="material-symbols-outlined text-[16px]">bolt</span>
                            <span className="text-xs font-bold uppercase tracking-wider">{t('dashboard.live')}</span>
                        </div>
                    </div>
                    <div className="flex flex-col items-start leading-none">
                        <div className="flex items-baseline gap-1">
                            <span className="text-[7rem] font-display font-bold text-ink-black tracking-tighter leading-none">
                                02
                            </span>
                            <span className="text-2xl font-bold text-stone-gray mb-4">{t('dashboard.hours')}</span>
                        </div>
                        <div className="flex items-baseline w-full justify-between border-t-2 border-ink-black pt-2 mt-2">
                            <div className="flex items-baseline gap-1">
                                <span className="text-[4rem] font-display font-bold text-amber-accent tracking-tighter">
                                    45
                                </span>
                                <span className="text-lg font-bold text-stone-gray">{t('dashboard.minutes')}</span>
                            </div>
                            <div className="flex items-baseline gap-1">
                                <span className="text-[4rem] font-display font-bold text-ink-black tracking-tighter">
                                    12
                                </span>
                                <span className="text-lg font-bold text-stone-gray">{t('dashboard.seconds')}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="px-6 py-8 border-b border-ink-black bg-white">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="font-display text-xl font-bold uppercase">{t('dashboard.theGuardian')}</h3>
                        <span className="px-2 py-1 bg-ink-black text-white text-xs font-bold uppercase">{t('dashboard.level')} 05</span>
                    </div>
                    <div className="relative w-full aspect-[2/1] border-2 border-ink-black bg-off-white overflow-hidden shadow-kinetic group">
                        <div className="absolute inset-0 pattern-grid opacity-20"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative size-24 border-2 border-ink-black bg-white flex items-center justify-center rotate-45 transition-transform duration-700 group-hover:rotate-90">
                                <div className="absolute inset-2 border border-amber-accent bg-amber-accent/10"></div>
                                <div className="size-8 bg-ink-black"></div>
                            </div>
                            <div className="absolute w-48 h-48 border border-dashed border-stone-gray rounded-full animate-[spin_10s_linear_infinite]"></div>
                            <div className="absolute w-64 h-64 border border-stone-gray opacity-30 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full bg-white/90 border-t-2 border-ink-black p-3 backdrop-blur-sm flex justify-between items-center">
                            <div>
                                <p className="font-display font-bold text-sm uppercase">{t('dashboard.evolutionStatus')}</p>
                                <p className="text-xs text-stone-gray font-mono">{t('dashboard.stabilizing')}</p>
                            </div>
                            <div className="h-2 w-24 bg-gray-200 border border-ink-black">
                                <div className="h-full bg-amber-accent w-[68%]"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 divide-x divide-ink-black border-b border-ink-black bg-white">
                    <div className="p-6 flex flex-col justify-between h-40 group hover:bg-amber-50 transition-colors">
                        <div className="flex justify-between items-start">
                            <span className="material-symbols-outlined text-3xl text-ink-black">smartphone</span>
                            <span className="text-xs font-bold text-amber-accent bg-amber-100 px-1 py-0.5 border border-amber-accent">+12%</span>
                        </div>
                        <div>
                            <h4 className="text-xs font-bold uppercase text-stone-gray tracking-wider mb-1">{t('dashboard.focusTime')}</h4>
                            <p className="text-3xl font-display font-bold text-ink-black group-hover:translate-x-1 transition-transform">4h 20m</p>
                        </div>
                    </div>
                    <div className="p-6 flex flex-col justify-between h-40 group hover:bg-amber-50 transition-colors cursor-pointer" onClick={onNavigateToQuests}>
                        <div className="flex justify-between items-start">
                            <span className="material-symbols-outlined text-3xl text-ink-black">map</span>
                            <span className="text-xs font-bold text-ink-black border border-ink-black px-1 py-0.5">3/5</span>
                        </div>
                        <div>
                            <h4 className="text-xs font-bold uppercase text-stone-gray tracking-wider mb-1">{t('dashboard.activeQuests')}</h4>
                            <p className="text-3xl font-display font-bold text-ink-black group-hover:translate-x-1 transition-transform">03</p>
                        </div>
                    </div>
                </div>

                {/* Premium Challenge Section (Deposit & Reward) */}
                <div className="px-6 py-8 border-b border-ink-black bg-off-white">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="font-display text-xl font-bold uppercase flex items-center gap-2 text-ink-black">
                            <span className="material-symbols-outlined text-amber-accent">stars</span>
                            Premium Challenge
                        </h3>
                        <span className="px-2 py-1 bg-amber-accent text-ink-black text-[10px] font-bold uppercase tracking-widest border border-ink-black animate-pulse">Live</span>
                    </div>
                    <div className="border-2 border-ink-black bg-white p-5 shadow-kinetic relative group overflow-hidden">
                        <div className="absolute top-0 right-0 w-16 h-16 bg-amber-100 rounded-bl-full -z-0"></div>
                        <h4 className="font-display font-bold text-lg leading-tight uppercase relative z-10">{t('monetization.premiumChallengeTitle')}</h4>
                        <p className="text-stone-gray text-sm mt-2 leading-relaxed relative z-10">{t('monetization.premiumChallengeDesc')}</p>

                        <div className="mt-4 grid grid-cols-2 gap-4 border-t border-dashed border-gray-300 pt-4 relative z-10">
                            <div>
                                <span className="block text-[10px] font-bold uppercase text-stone-gray tracking-wider mb-1">{t('monetization.depositLabel')}</span>
                                <span className="font-mono font-bold text-ink-black">₩10,000</span>
                            </div>
                            <div>
                                <span className="block text-[10px] font-bold uppercase text-stone-gray tracking-wider mb-1">{t('monetization.prizePool')}</span>
                                <span className="font-mono font-bold text-amber-600">₩1,450,000</span>
                            </div>
                        </div>

                        <button className="w-full mt-5 py-3 border-2 border-ink-black bg-ink-black text-white font-display font-bold uppercase tracking-widest text-sm hover:bg-amber-accent hover:text-ink-black transition-colors flex items-center justify-center gap-2 relative z-10">
                            {t('monetization.joinChallenge')}
                            <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </button>
                    </div>
                </div>

                <div className="px-6 py-8">
                    <h3 className="font-display text-xl font-bold uppercase mb-6 flex items-center gap-2">
                        <span className="w-3 h-3 bg-amber-accent"></span>
                        {t('dashboard.currentObjective')}
                    </h3>
                    <div onClick={onNavigateToQuests} className="border-2 border-ink-black bg-white p-5 shadow-kinetic flex items-center gap-5 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all cursor-pointer">
                        <div className="size-14 border-2 border-ink-black bg-off-white flex items-center justify-center shrink-0">
                            <span className="material-symbols-outlined text-amber-accent text-[28px]">water_drop</span>
                        </div>
                        <div className="flex-1 min-w-0">
                            <h4 className="text-ink-black font-display font-bold text-lg leading-tight">{t('dashboard.hydrationStation')}</h4>
                            <p className="text-stone-gray text-sm mt-1 font-mono">{t('dashboard.hydrationTarget')}</p>
                        </div>
                        <button className="size-10 border-2 border-ink-black bg-ink-black text-white hover:bg-amber-accent hover:text-ink-black transition-colors flex items-center justify-center">
                            <span className="material-symbols-outlined text-[20px]">check</span>
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}
