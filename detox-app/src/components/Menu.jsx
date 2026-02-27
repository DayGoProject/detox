import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Menu({ isOpen, onClose, onNavigate }) {
    const { t } = useTranslation();

    if (!isOpen) return null;

    const handleNav = (page) => {
        onNavigate(page);
        onClose();
    };

    return (
        <div className="fixed inset-0 z-[100] flex">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-ink-black/50 backdrop-blur-sm"
                onClick={onClose}
            ></div>

            {/* Menu Panel */}
            <div className="relative w-4/5 max-w-sm h-full bg-off-white shadow-[-10px_0_30px_rgba(0,0,0,0.5)] flex flex-col border-r-2 border-ink-black animate-[slideRight_0.3s_ease-out]">
                <div className="p-6 border-b-2 border-ink-black flex justify-between items-center bg-white">
                    <h2 className="font-display text-2xl font-bold uppercase tracking-widest">{t('menu.title')}</h2>
                    <button onClick={onClose} className="p-2 border-2 border-transparent hover:border-ink-black transition-all">
                        <span className="material-symbols-outlined">close</span>
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto">
                    <ul className="flex flex-col divide-y divide-border-gray">
                        <li onClick={() => handleNav('settings')} className="p-6 hover:bg-amber-50 cursor-pointer flex items-center gap-4 transition-colors group">
                            <span className="material-symbols-outlined text-stone-gray group-hover:text-amber-accent">settings</span>
                            <span className="font-bold text-lg">{t('menu.settings')}</span>
                        </li>
                        <li onClick={() => handleNav('history')} className="p-6 hover:bg-amber-50 cursor-pointer flex items-center gap-4 transition-colors group">
                            <span className="material-symbols-outlined text-stone-gray group-hover:text-amber-accent">history</span>
                            <span className="font-bold text-lg">{t('menu.history')}</span>
                        </li>
                        <li onClick={() => handleNav('friends')} className="p-6 hover:bg-amber-50 cursor-pointer flex items-center gap-4 transition-colors group">
                            <span className="material-symbols-outlined text-stone-gray group-hover:text-amber-accent">group</span>
                            <span className="font-bold text-lg">{t('menu.friends')}</span>
                        </li>
                        <li onClick={() => handleNav('help')} className="p-6 hover:bg-amber-50 cursor-pointer flex items-center gap-4 transition-colors group">
                            <span className="material-symbols-outlined text-stone-gray group-hover:text-amber-accent">help</span>
                            <span className="font-bold text-lg">{t('menu.help')}</span>
                        </li>
                    </ul>
                </div>

                <div className="p-6 border-t-2 border-ink-black bg-white">
                    <button className="w-full py-4 bg-ink-black text-white font-bold uppercase tracking-widest hover:bg-amber-accent hover:text-ink-black transition-colors flex items-center justify-center gap-2">
                        <span className="material-symbols-outlined">logout</span>
                        {t('menu.logout')}
                    </button>
                </div>
            </div>
        </div>
    );
}
