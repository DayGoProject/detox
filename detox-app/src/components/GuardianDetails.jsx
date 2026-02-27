import React from 'react';
import { useTranslation } from 'react-i18next';

export default function GuardianDetails() {
    const { t } = useTranslation();

    return (
        <div className="bg-off-white text-ink-black min-h-screen flex flex-col overflow-hidden relative selection:bg-amber-accent selection:text-white pb-16">
            <main className="flex-1 overflow-y-auto scrollbar-hide pb-24">

                <div className="px-6 py-8 border-b border-ink-black bg-white">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="font-display text-2xl font-bold uppercase">{t('guardian.title')}</h3>
                        <span className="px-3 py-1 bg-amber-accent text-ink-black text-sm font-bold uppercase shadow-kinetic-sm">Lvl 05</span>
                    </div>

                    <div className="relative w-full aspect-square border-2 border-ink-black bg-off-white overflow-hidden shadow-kinetic group">
                        <div className="absolute inset-0 pattern-grid opacity-20"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            {/* Guardian Avatar Detail View */}
                            <div className="relative size-40 border-4 border-ink-black bg-white flex items-center justify-center rotate-45 transition-transform duration-1000 group-hover:rotate-[135deg]">
                                <div className="absolute inset-4 border-2 border-amber-accent bg-amber-accent/20"></div>
                                <div className="size-16 bg-ink-black animate-pulse"></div>
                            </div>
                            <div className="absolute w-72 h-72 border-2 border-dashed border-stone-gray rounded-full animate-[spin_10s_linear_infinite]"></div>
                            <div className="absolute w-96 h-96 border-2 border-stone-gray opacity-30 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                        </div>
                    </div>
                </div>

                <div className="px-6 py-8 bg-white border-b border-ink-black">
                    <h4 className="font-display font-bold uppercase text-stone-gray tracking-widest mb-4">{t('guardian.stats')}</h4>
                    <div className="space-y-6">
                        <div>
                            <div className="flex justify-between mb-1">
                                <span className="font-bold">{t('guardian.health')}</span>
                                <span className="font-mono">100%</span>
                            </div>
                            <div className="h-4 bg-gray-200 border-2 border-ink-black">
                                <div className="h-full bg-green-500 w-full"></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between mb-1">
                                <span className="font-bold">{t('guardian.energy')}</span>
                                <span className="font-mono">68%</span>
                            </div>
                            <div className="h-4 bg-gray-200 border-2 border-ink-black">
                                <div className="h-full bg-amber-accent w-[68%]"></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between mb-1">
                                <span className="font-bold">{t('guardian.growth')}</span>
                                <span className="font-mono">+12 XP/hr</span>
                            </div>
                            <div className="h-4 bg-gray-200 border-2 border-ink-black">
                                <div className="h-full bg-blue-500 w-[45%]"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-6 bg-amber-50 border-b border-ink-black">
                    <p className="text-stone-gray leading-relaxed font-medium">
                        {t('guardian.desc')}
                    </p>
                </div>

                {/* Avatar Topping Store Section */}
                <div className="px-6 py-8 bg-off-white pb-24">
                    <div className="flex justify-between items-center mb-6">
                        <h4 className="font-display font-bold uppercase text-ink-black tracking-widest flex items-center gap-2">
                            <span className="material-symbols-outlined text-amber-accent">storefront</span>
                            {t('monetization.storeTitle', 'Topping Store')}
                        </h4>
                    </div>
                    <p className="text-sm text-stone-gray mb-6">{t('monetization.storeDesc')}</p>

                    <div className="grid grid-cols-2 gap-4">
                        {/* Purchasable Item */}
                        <div className="border-2 border-ink-black bg-white p-4 shadow-kinetic-sm flex flex-col items-center text-center group">
                            <div className="size-16 mb-4 flex items-center justify-center bg-gray-100 border border-gray-300 rounded-full group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-3xl text-amber-500">checkroom</span>
                            </div>
                            <h5 className="font-bold text-sm uppercase mb-1">Cozy Rug</h5>
                            <span className="text-xs font-mono font-bold text-amber-600 mb-4">₩1,500</span>
                            <button className="w-full py-2 bg-ink-black text-white text-xs font-bold uppercase tracking-wider hover:bg-amber-accent hover:text-ink-black transition-colors">
                                {t('monetization.buyItem')}
                            </button>
                        </div>

                        {/* Rank-Locked Item */}
                        <div className="border-2 border-stone-gray bg-gray-50 p-4 flex flex-col items-center text-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-white/50 backdrop-blur-[2px] z-10 flex flex-col items-center justify-center">
                                <span className="material-symbols-outlined text-stone-gray text-3xl mb-2">lock</span>
                                <span className="text-[10px] font-bold text-ink-black uppercase text-center px-2">{t('monetization.lockedRank')}</span>
                            </div>
                            <div className="opacity-50 blur-[1px]">
                                <div className="size-16 mb-4 mx-auto flex items-center justify-center bg-gray-200 border border-gray-300 rounded-full">
                                    <span className="material-symbols-outlined text-3xl text-purple-500">diamond</span>
                                </div>
                                <h5 className="font-bold text-sm uppercase mb-1">Golden Halo</h5>
                                <span className="text-xs font-mono font-bold text-amber-600 mb-4">₩5,000</span>
                                <button className="w-full py-2 bg-stone-gray text-white text-xs font-bold uppercase tracking-wider cursor-not-allowed">
                                    Locked
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    );
}
