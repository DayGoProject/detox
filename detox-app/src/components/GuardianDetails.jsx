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

                <div className="p-6 bg-amber-50">
                    <p className="text-stone-gray leading-relaxed font-medium">
                        {t('guardian.desc')}
                    </p>
                </div>

            </main>
        </div>
    );
}
