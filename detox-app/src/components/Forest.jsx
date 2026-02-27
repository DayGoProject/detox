import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Forest() {
    const { t } = useTranslation();

    return (
        <div className="bg-off-white text-ink-black min-h-screen flex flex-col overflow-hidden relative selection:bg-amber-accent selection:text-white pb-16">
            <main className="flex-1 overflow-y-auto scrollbar-hide pb-24">

                <div className="px-6 pt-12 pb-6 border-b-2 border-ink-black bg-white sticky top-0 z-10">
                    <h2 className="font-display text-3xl font-bold uppercase tracking-widest">{t('forest.title')}</h2>
                    <p className="text-stone-gray text-sm mt-2">{t('forest.desc')}</p>
                </div>

                <div className="p-6">
                    <div className="grid grid-cols-2 gap-4 mb-8">
                        <div className="border-2 border-ink-black bg-white p-4 shadow-kinetic flex flex-col items-center justify-center">
                            <span className="material-symbols-outlined text-4xl text-green-600 mb-2">park</span>
                            <span className="font-display text-3xl font-bold">12</span>
                            <span className="text-xs font-bold text-stone-gray uppercase tracking-widest mt-1 text-center">{t('forest.trees')}</span>
                        </div>
                        <div className="border-2 border-ink-black bg-white p-4 shadow-kinetic flex flex-col items-center justify-center">
                            <span className="material-symbols-outlined text-4xl text-amber-accent mb-2">local_fire_department</span>
                            <span className="font-display text-3xl font-bold">5</span>
                            <span className="text-xs font-bold text-stone-gray uppercase tracking-widest mt-1 text-center">{t('forest.streak')}</span>
                        </div>
                    </div>

                    <h3 className="font-display text-xl font-bold uppercase mb-4 flex items-center gap-2">
                        <span className="w-3 h-3 bg-green-600"></span>
                        Recent Logs
                    </h3>

                    <div className="space-y-4">
                        <div className="border-2 border-ink-black bg-white p-4 flex gap-4 items-center group hover:bg-green-50 transition-colors">
                            <div className="w-12 h-12 bg-gray-200 border-2 border-ink-black overflow-hidden shrink-0">
                                <img alt="Nature" className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDy81F0c9kwlOqKlr_JRPgl397lm4OjrSnzfMd9Sg9F9cG3yAZveah9r1YRXdwXWI5vP9HdGauqBXqQ2H9-trYW_NaQXS5aaTxwreOTTLQZEuus5wVkJkxwPciYz0DixVY1IAgnxG0NOcNOM-56KxIDp4pSobpSDDUgmqYD6T-x9tSKwv3-sRJ5GuPX5-KkFZFKx276RljW_74RZJhFpOxvTDIHuc7_zSV0WdWO1qJy8DbIq0GNR78PEvhLKJ8VBLrtFx-pWZV2jGo" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h4 className="font-bold truncate">{t('quests.natureQuest', 'Nature Quest')}</h4>
                                <p className="text-sm font-mono text-stone-gray">Today, 10:42 AM</p>
                            </div>
                            <span className="font-bold text-amber-accent">+50 XP</span>
                        </div>

                        <div className="border-2 border-ink-black bg-white p-4 flex gap-4 items-center group hover:bg-green-50 transition-colors">
                            <div className="w-12 h-12 bg-gray-200 border-2 border-ink-black overflow-hidden shrink-0">
                                <img alt="Walk" className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnbcfTh0ky9EmWVHNqduDR1BgdE34kWHlfmGGmPMaCNEOnCF1UX76BASld5R_6ipi5vKpbU7HX6l4BycFUy6Fe5VzKDwaNHanAV4Cgaf_OVKVARR2IKMnP5O249k6y7fJ2-eU6JoMJjSKLEjzbrUctxyF_WaOI46bD_A1WVPv0R-ir8i0PtDfllKmK0FOWYMi26WuRmNqq1umIeJLsbhe-5MCBUvNf-zPgsBnlJgCz622L8s4MLfXeZIJJSh-KbjoJhyW_8efVbvk" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h4 className="font-bold truncate">{t('quests.walkQuest', 'Walking Quest')}</h4>
                                <p className="text-sm font-mono text-stone-gray">Yesterday, 4:15 PM</p>
                            </div>
                            <span className="font-bold text-amber-accent">+120 XP</span>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
