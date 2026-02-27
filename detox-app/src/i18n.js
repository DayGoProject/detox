import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            "app": {
                "title": "Kinetic"
            },
            "dashboard": {
                "detoxTimer": "Detox Timer",
                "live": "Live",
                "hours": "h",
                "minutes": "m",
                "seconds": "s",
                "theGuardian": "The Guardian",
                "level": "Lvl",
                "evolutionStatus": "Evolution Status",
                "stabilizing": "Stabilizing neural link...",
                "focusTime": "Focus Time",
                "activeQuests": "Active Quests",
                "currentObjective": "Current Objective",
                "hydrationStation": "Hydration Station",
                "hydrationTarget": "Target: 500ml H2O intake"
            },
            "quests": {
                "dopamineDetox": "Dopamine Detox",
                "selectAction": "Select Action",
                "earnYour": "EARN YOUR",
                "unlock": "UNLOCK",
                "description": "The digital world can wait. Reconnect with your body to break the loop. Choose a physical challenge to proceed.",
                "nature": "Nature",
                "touchGrass": "Touch Grass",
                "natureDesc": "Step outside. Locate greenery. Capture a photo. Prove you exist in the real world.",
                "begin": "Begin",
                "endurance": "Endurance",
                "walk": "15 Min Walk",
                "walkDesc": "GPS enabled. Consistent movement required. Clear your head and burn the cortisol.",
                "strength": "Strength",
                "squats": "20 Squats",
                "squatsDesc": "Immediate action. Device accelerometer active. Feel the burn, earn the scroll.",
                "orWait": "Or wait for dopamine reset"
            },
            "verification": {
                "currentQuest": "Current Quest",
                "natureQuest": "Nature Quest",
                "walkQuest": "Walking Quest",
                "squatQuest": "Squat Quest",
                "proofOfLife": "Proof of Life",
                "scanning": "Scanning"
            },
            "questTypes": {
                "nature": {
                    "title": "Touch Grass",
                    "category": "Nature",
                    "desc": "Step outside. Locate greenery. Capture a photo.",
                    "xp": 50,
                    "img": "forest"
                },
                "walk": {
                    "title": "15 Min Walk",
                    "category": "Endurance",
                    "desc": "GPS enabled. Consistent movement required.",
                    "xp": 120,
                    "img": "directions_walk"
                },
                "squats": {
                    "title": "20 Squats",
                    "category": "Strength",
                    "desc": "Immediate action. Device accelerometer active.",
                    "xp": 75,
                    "img": "fitness_center"
                },
                "water": {
                    "title": "Drink 500ml Water",
                    "category": "Health",
                    "desc": "Hydrate your body. Take a picture of your glass.",
                    "xp": 30,
                    "img": "water_drop"
                },
                "meditate": {
                    "title": "5 Min Meditation",
                    "category": "Mindfulness",
                    "desc": "Close your eyes. Breathe. Camera tracks zero phone motion.",
                    "xp": 60,
                    "img": "self_improvement"
                },
                "stretch": {
                    "title": "Full Body Stretch",
                    "category": "Flexibility",
                    "desc": "Stand up and reach for the sky. Hold for 2 minutes.",
                    "xp": 45,
                    "img": "accessibility_new"
                },
                "clean": {
                    "title": "Tidy Your Desk",
                    "category": "Environment",
                    "desc": "Organize your immediate workspace. Snap a before/after.",
                    "xp": 80,
                    "img": "cleaning_services"
                },
                "read": {
                    "title": "Read 5 Pages",
                    "category": "Focus",
                    "desc": "Grab a physical book. Photo of the page required.",
                    "xp": 90,
                    "img": "menu_book"
                }
            },
            "menuPages": {
                "settings": {
                    "title": "Settings",
                    "language": "Language",
                    "notifications": "Notifications",
                    "strictMode": "Strict Mode (Cannot cancel)",
                    "account": "Account Management"
                },
                "history": {
                    "title": "Detox History",
                    "totalTime": "Total Offline Time",
                    "questsDone": "Quests Completed",
                    "chart": "Weekly Analytics (Mock)"
                },
                "friends": {
                    "title": "Leaderboard",
                    "invite": "Invite Friend",
                    "rank1": "1. User404 (2,400 XP)",
                    "rank2": "2. ZenMaster (1,950 XP)",
                    "rank3": "3. NatureWalker (1,200 XP)"
                },
                "help": {
                    "title": "Help & Support",
                    "faq": "FAQ",
                    "contact": "Contact Developer",
                    "terms": "Terms of Service"
                },
                "back": "Back to Home"
            },
            "menu": {
                "title": "Menu",
                "settings": "Settings",
                "history": "Detox History",
                "friends": "Friends & Leaders",
                "help": "Help & Support",
                "logout": "Logout"
            },
            "guardian": {
                "title": "The Guardian",
                "stats": "Entity Stats",
                "health": "Health",
                "energy": "Energy",
                "growth": "Growth Rate",
                "desc": "Your guardian thrives when you stay away from cheap dopamine. Every successful quest feeds it."
            },
            "forest": {
                "title": "My Forest",
                "desc": "A record of your reconnection with reality.",
                "trees": "Trees Planted (Quests)",
                "streak": "Day Streak"
            },
            "profile": {
                "title": "Profile",
                "upgrade": "Upgrade to Premium",
                "premiumDesc": "Support the developer and unlock exclusive guardian skins.",
                "payWithPaypal": "Pay with PayPal (Mock)"
            },
            "monetization": {
                "premiumChallengeTitle": "Weekend 4-Hour Detox",
                "premiumChallengeDesc": "Deposit ₩10,000. Failures lose deposit, winners split the pot.",
                "depositLabel": "Entry Deposit",
                "prizePool": "Est. Prize Pool",
                "joinChallenge": "Join Challenge",
                "storeTitle": "Topping Store",
                "storeDesc": "Customize your guardian. Some items require high Local Rank.",
                "buyItem": "Purchase",
                "lockedRank": "Requires Local Top 10%",
                "tabGlobal": "Global",
                "tabFriends": "Friends",
                "tabLocal": "My Neighborhood",
                "localReward": "Rank 1-10: 20% Off Joe's Cafe",
                "b2bSponsor": "Sponsored by Local Businesses"
            }
        }
    },
    ko: {
        translation: {
            "app": {
                "title": "Kinetic"
            },
            "dashboard": {
                "detoxTimer": "디톡스 타이머",
                "live": "진행중",
                "hours": "시간",
                "minutes": "분",
                "seconds": "초",
                "theGuardian": "가디언",
                "level": "에너지 LV",
                "evolutionStatus": "진화 상태",
                "stabilizing": "신경망 연결 안정화 중...",
                "focusTime": "집중 시간",
                "activeQuests": "활성 퀘스트",
                "currentObjective": "현재 목표",
                "hydrationStation": "수분 보충",
                "hydrationTarget": "목표: 물 500ml 마시기"
            },
            "quests": {
                "dopamineDetox": "도파민 디톡스",
                "selectAction": "행동 선택",
                "earnYour": "잠금을",
                "unlock": "해제하세요",
                "description": "디지털 세상은 잠시 미뤄두세요. 진짜 세상과 다시 연결하여 중독의 고리를 끊어보세요. 진행할 신체 활동 퀘스트를 선택하세요.",
                "nature": "자연",
                "touchGrass": "Touch Grass (자연과 함께)",
                "natureDesc": "밖으로 나가서 초록빛 풍경을 찾으세요. 사진을 찍어 현실 세계에 존재함을 증명하세요.",
                "begin": "시작",
                "endurance": "인내",
                "walk": "15분 걷기",
                "walkDesc": "GPS가 활성화됩니다. 지속적인 움직임이 필요합니다. 머리를 비우고 스트레스를 태우세요.",
                "strength": "근력",
                "squats": "스쿼트 20회",
                "squatsDesc": "단기 집중 보상. 기기 모션 센서가 활성화됩니다. 근육의 움직임을 느끼고 스크롤할 자격을 얻으세요.",
                "orWait": "또는 도파민 리셋 기다리기"
            },
            "verification": {
                "currentQuest": "현재 퀘스트",
                "natureQuest": "자연 퀘스트",
                "walkQuest": "걷기 퀘스트",
                "squatQuest": "운동 퀘스트",
                "proofOfLife": "생존 확인",
                "scanning": "스캔 중"
            },
            "questTypes": {
                "nature": {
                    "title": "Touch Grass (자연과 함께)",
                    "category": "자연",
                    "desc": "밖으로 나가서 초록빛 풍경을 찾으세요. 사진을 찍으세요.",
                    "xp": 50,
                    "img": "forest"
                },
                "walk": {
                    "title": "15분 걷기",
                    "category": "지구력",
                    "desc": "GPS가 활성화됩니다. 지속적인 움직임이 필요합니다.",
                    "xp": 120,
                    "img": "directions_walk"
                },
                "squats": {
                    "title": "스쿼트 20회",
                    "category": "근력",
                    "desc": "기기 모션 센서가 활성화됩니다. 즉각적인 행동이 필요합니다.",
                    "xp": 75,
                    "img": "fitness_center"
                },
                "water": {
                    "title": "물 500ml 마시기",
                    "category": "건강",
                    "desc": "몸에 수분을 공급하세요. 물컵 사진을 찍어 인증하세요.",
                    "xp": 30,
                    "img": "water_drop"
                },
                "meditate": {
                    "title": "5분 명상",
                    "category": "마음챙김",
                    "desc": "눈을 감고 호흡하세요. 폰이 움직이지 않아야 합니다.",
                    "xp": 60,
                    "img": "self_improvement"
                },
                "stretch": {
                    "title": "전신 스트레칭",
                    "category": "유연성",
                    "desc": "자리에서 일어나 몸을 뻗으세요. 2분간 유지합니다.",
                    "xp": 45,
                    "img": "accessibility_new"
                },
                "clean": {
                    "title": "책상 정리하기",
                    "category": "환경",
                    "desc": "작업 공간을 정돈하세요. 전/후 사진이 필요합니다.",
                    "xp": 80,
                    "img": "cleaning_services"
                },
                "read": {
                    "title": "종이책 5쪽 읽기",
                    "category": "집중력",
                    "desc": "물리적인 책을 집어 드세요. 페이지 사진을 인증하세요.",
                    "xp": 90,
                    "img": "menu_book"
                }
            },
            "menuPages": {
                "settings": {
                    "title": "설정",
                    "language": "언어",
                    "notifications": "알림",
                    "strictMode": "엄격 모드 (취소 불가)",
                    "account": "계정 관리"
                },
                "history": {
                    "title": "디톡스 기록",
                    "totalTime": "총 오프라인 시간",
                    "questsDone": "완료한 퀘스트 수",
                    "chart": "주간 통계 (모의 데이터)"
                },
                "friends": {
                    "title": "리더보드",
                    "invite": "친구 초대",
                    "rank1": "1. User404 (2,400 XP)",
                    "rank2": "2. ZenMaster (1,950 XP)",
                    "rank3": "3. NatureWalker (1,200 XP)"
                },
                "help": {
                    "title": "고객 지원",
                    "faq": "자주 묻는 질문",
                    "contact": "개발자에게 문의",
                    "terms": "서비스 이용약관"
                },
                "back": "홈으로 돌아가기"
            },
            "menu": {
                "title": "메뉴",
                "settings": "설정",
                "history": "디톡스 기록",
                "friends": "친구 및 리더보드",
                "help": "고객 지원",
                "logout": "로그아웃"
            },
            "guardian": {
                "title": "가디언 정보",
                "stats": "엔티티 스탯",
                "health": "건강",
                "energy": "에너지",
                "growth": "성장률",
                "desc": "가디언은 당신이 값싼 도파민을 멀리할 때 성장합니다. 성공적인 퀘스트는 가디언의 먹이가 됩니다."
            },
            "forest": {
                "title": "나의 숲",
                "desc": "현실 세계와 다시 연결된 당신의 기록입니다.",
                "trees": "심은 나무 (퀘스트 완료)",
                "streak": "연속 달성일"
            },
            "profile": {
                "title": "프로필",
                "upgrade": "프리미엄 업그레이드",
                "premiumDesc": "개발자를 후원하고 특별한 가디언 스킨을 잠금 해제하세요.",
                "payWithPaypal": "PayPal로 결제하기 (모의)"
            },
            "monetization": {
                "premiumChallengeTitle": "주말 4시간 딥 디톡스 챌린지",
                "premiumChallengeDesc": "참가비 1만원. 실패 시 예치금 소멸, 성공한 사람들이 상금을 나누어 가집니다.",
                "depositLabel": "참가 예치금",
                "prizePool": "예상 총 상금",
                "joinChallenge": "챌린지 참가하기",
                "storeTitle": "토핑 스토어",
                "storeDesc": "가디언을 꾸며보세요. 일부 아이템은 동네 상위 랭크가 필요합니다.",
                "buyItem": "결제하기",
                "lockedRank": "동네 상위 10% 전용",
                "tabGlobal": "전국 단위",
                "tabFriends": "친구",
                "tabLocal": "우리 동네",
                "localReward": "1~10위 보상: 동네 카페 20% 할인권",
                "b2bSponsor": "지역 소상공인 후원 리더보드"
            }
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "ko", // Default language is Korean
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
