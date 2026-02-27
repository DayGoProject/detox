import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function MenuPages({ page, onBack }) {
    const { t } = useTranslation();
    const [leaderboardTab, setLeaderboardTab] = useState('local');

    const Header = ({ title }) => (
        <div className="px-6 pt-12 pb-6 border-b-2 border-ink-black bg-white sticky top-0 z-10 flex items-center gap-4">
            <button onClick={onBack} className="p-2 border-2 border-transparent hover:border-ink-black transition-all">
                <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <h2 className="font-display text-2xl font-bold uppercase tracking-widest">{title}</h2>
        </div>
    );

    if (page === 'settings') {
        return (
            <div className="bg-off-white text-ink-black min-h-screen flex flex-col pb-16">
                <Header title={t('menuPages.settings.title')} />
                <div className="p-6 space-y-4">
                    <div className="border-2 border-ink-black bg-white p-4 flex justify-between items-center group cursor-pointer hover:bg-amber-50">
                        <span className="font-bold">{t('menuPages.settings.language')}</span>
                        <span className="text-stone-gray material-symbols-outlined group-hover:text-amber-accent">arrow_forward_ios</span>
                    </div>
                    <div className="border-2 border-ink-black bg-white p-4 flex justify-between items-center group cursor-pointer hover:bg-amber-50">
                        <span className="font-bold">{t('menuPages.settings.notifications')}</span>
                        <div className="w-12 h-6 bg-green-500 rounded-full relative">
                            <div className="absolute right-1 top-1 size-4 bg-white rounded-full"></div>
                        </div>
                    </div>
                    <div className="border-2 border-ink-black bg-white p-4 flex justify-between items-center group cursor-pointer hover:bg-amber-50">
                        <span className="font-bold text-red-600">{t('menuPages.settings.strictMode')}</span>
                        <div className="w-12 h-6 bg-gray-300 rounded-full relative">
                            <div className="absolute left-1 top-1 size-4 bg-white rounded-full"></div>
                        </div>
                    </div>
                    <div className="border-2 border-ink-black bg-white p-4 flex justify-between items-center group cursor-pointer hover:bg-amber-50 mt-8">
                        <span className="font-bold">{t('menuPages.settings.account')}</span>
                        <span className="text-stone-gray material-symbols-outlined group-hover:text-amber-accent">person</span>
                    </div>
                </div>
            </div>
        );
    }

    if (page === 'history') {
        return (
            <div className="bg-off-white text-ink-black min-h-screen flex flex-col pb-16">
                <Header title={t('menuPages.history.title')} />
                <div className="p-6">
                    <div className="grid grid-cols-2 gap-4 mb-8">
                        <div className="border-2 border-ink-black bg-white p-4 shadow-kinetic flex flex-col">
                            <span className="text-xs font-bold text-stone-gray uppercase mb-2">{t('menuPages.history.totalTime')}</span>
                            <span className="font-display text-2xl font-bold">142h 30m</span>
                        </div>
                        <div className="border-2 border-ink-black bg-white p-4 shadow-kinetic flex flex-col">
                            <span className="text-xs font-bold text-stone-gray uppercase mb-2">{t('menuPages.history.questsDone')}</span>
                            <span className="font-display text-2xl font-bold">87</span>
                        </div>
                    </div>
                    <h3 className="font-bold uppercase mb-4">{t('menuPages.history.chart')}</h3>
                    <div className="h-48 border-2 border-ink-black bg-white p-4 flex items-end gap-2 justify-between">
                        {/* Mock Chart Bars */}
                        {[40, 70, 30, 90, 60, 100, 50].map((h, i) => (
                            <div key={i} className="w-full bg-amber-accent border-2 border-ink-black" style={{ height: `${h}%` }}></div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    if (page === 'friends') {
        return (
            <div className="bg-off-white text-ink-black min-h-screen flex flex-col pb-16">
                <Header title={t('menuPages.friends.title')} />

                {/* Leaderboard Tabs */}
                <div className="flex border-b-2 border-ink-black bg-white">
                    <button
                        onClick={() => setLeaderboardTab('global')}
                        className={`flex-1 py-3 text-sm font-bold uppercase ${leaderboardTab === 'global' ? 'bg-ink-black text-white' : 'text-stone-gray hover:bg-slate-100'}`}
                    >
                        {t('monetization.tabGlobal')}
                    </button>
                    <button
                        onClick={() => setLeaderboardTab('friends')}
                        className={`flex-1 py-3 text-sm font-bold uppercase border-l-2 border-ink-black ${leaderboardTab === 'friends' ? 'bg-ink-black text-white' : 'text-stone-gray hover:bg-slate-100'}`}
                    >
                        {t('monetization.tabFriends')}
                    </button>
                    <button
                        onClick={() => setLeaderboardTab('local')}
                        className={`flex-1 py-3 text-sm font-bold uppercase border-l-2 border-ink-black ${leaderboardTab === 'local' ? 'bg-ink-black text-white' : 'text-stone-gray hover:bg-slate-100'}`}
                    >
                        {t('monetization.tabLocal')}
                    </button>
                </div>

                <div className="p-6 flex-1">
                    {leaderboardTab === 'local' && (
                        <div className="mb-6 p-4 border-2 border-amber-accent bg-amber-50">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="material-symbols-outlined text-amber-500">storefront</span>
                                <h4 className="font-bold uppercase text-amber-700 text-sm tracking-wider">{t('monetization.b2bSponsor')}</h4>
                            </div>
                            <p className="text-sm font-bold text-ink-black">{t('monetization.localReward')}</p>
                        </div>
                    )}

                    <button className="w-full py-4 mb-6 bg-amber-accent border-2 border-ink-black font-bold flex items-center justify-center gap-2 shadow-kinetic-sm hover:translate-y-[2px] hover:shadow-none transition-all">
                        <span className="material-symbols-outlined">person_add</span>
                        {t('menuPages.friends.invite')}
                    </button>

                    <div className="space-y-3">
                        <div className="border-2 border-ink-black bg-white p-4 font-bold flex items-center justify-between shadow-kinetic-sm text-amber-600 relative overflow-hidden">
                            {leaderboardTab === 'local' && <div className="absolute top-0 right-0 w-8 h-8 bg-amber-200 -z-0"></div>}
                            <span className="relative z-10">{t('menuPages.friends.rank1')}</span>
                            <span className="material-symbols-outlined relative z-10">workspace_premium</span>
                        </div>
                        <div className="border-2 border-ink-black bg-white p-4 font-bold flex items-center justify-between">
                            <span>{t('menuPages.friends.rank2')}</span>
                            <span className="material-symbols-outlined text-stone-gray">military_tech</span>
                        </div>
                        <div className="border-2 border-ink-black bg-white p-4 font-bold flex items-center justify-between">
                            <span>{t('menuPages.friends.rank3')}</span>
                            <span className="material-symbols-outlined text-stone-gray">military_tech</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (page === 'help') {
        return (
            <div className="bg-off-white text-ink-black min-h-screen flex flex-col pb-16">
                <Header title={t('menuPages.help.title')} />
                <div className="p-6 space-y-4">
                    <div className="border-2 border-ink-black bg-white p-4 flex justify-between items-center cursor-pointer hover:bg-amber-50">
                        <span className="font-bold">{t('menuPages.help.faq')}</span>
                        <span className="material-symbols-outlined">open_in_new</span>
                    </div>
                    <div className="border-2 border-ink-black bg-white p-4 flex justify-between items-center cursor-pointer hover:bg-amber-50">
                        <span className="font-bold">{t('menuPages.help.contact')}</span>
                        <span className="material-symbols-outlined">mail</span>
                    </div>
                    <div className="border-2 border-ink-black bg-white p-4 flex justify-between items-center cursor-pointer hover:bg-amber-50">
                        <span className="font-bold">{t('menuPages.help.terms')}</span>
                        <span className="material-symbols-outlined">description</span>
                    </div>
                </div>
            </div>
        );
    }

    return null;
}
