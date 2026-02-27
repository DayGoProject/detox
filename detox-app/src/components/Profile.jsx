import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Profile() {
    const { t } = useTranslation();

    return (
        <div className="bg-off-white text-ink-black min-h-screen flex flex-col overflow-hidden relative selection:bg-amber-accent selection:text-white pb-16">
            <main className="flex-1 overflow-y-auto scrollbar-hide pb-24">

                <div className="px-6 pt-12 pb-6 border-b border-ink-black bg-white">
                    <h2 className="font-display text-3xl font-bold uppercase tracking-widest">{t('profile.title')}</h2>
                </div>

                <div className="p-6 border-b border-ink-black bg-white flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 border-2 border-ink-black bg-amber-200 flex items-center justify-center shrink-0">
                            <span className="material-symbols-outlined text-4xl text-ink-black">face</span>
                        </div>
                        <div>
                            <h3 className="font-display font-bold text-xl">User404</h3>
                            <p className="font-mono text-sm text-stone-gray">ID: KIN-8921</p>
                        </div>
                    </div>
                    <button className="border-2 border-ink-black p-2 hover:bg-stone-gray hover:text-white transition-colors">
                        <span className="material-symbols-outlined">edit</span>
                    </button>
                </div>

                <div className="p-6">
                    <h4 className="font-display font-bold uppercase text-stone-gray tracking-widest mb-4">{t('profile.upgrade')}</h4>
                    <div className="border-2 border-ink-black bg-white p-6 shadow-kinetic">
                        <p className="font-medium mb-6">
                            {t('profile.premiumDesc')}
                        </p>
                        <button
                            className="w-full bg-[#FFC439] hover:bg-[#F4BB33] border-2 border-ink-black py-3 px-4 flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-kinetic-sm"
                            onClick={() => alert("Mock PayPal Flow Initiated!")}
                        >
                            <img src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_111x69.jpg" alt="PayPal" className="h-6" />
                            <span className="font-bold text-ink-black">{t('profile.payWithPaypal')}</span>
                        </button>
                    </div>
                </div>

            </main>
        </div>
    );
}
