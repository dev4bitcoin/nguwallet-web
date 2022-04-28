
const cards = [{
    title: 'Singlesig Support',
    subtitle: 'Simple to use, easy to set up. Spend your funds using your keys with any app that supports common wallet standards.',
    iconName: 'key-variant',
    hasAdditional: false,
    id: 1
},
{
    title: 'Market Rate',
    subtitle: 'Bitcoin market prices are available in 37 different currencies.',
    iconName: 'alpha-b-circle-outline',
    hasAdditional: true,
    id: 2
},
{
    title: 'Watch only wallets',
    subtitle: 'Easy to connect with your cold wallet and receive transactions.',
    iconName: 'eye-outline',
    hasAdditional: true,
    id: 3
},
{
    title: 'Notifications',
    subtitle: 'Get notified of all transactions you are sending and receiving.',
    iconName: 'bell-badge-outline',
    hasAdditional: true,
    id: 4
},
{
    title: 'Privacy',
    subtitle: 'No documents, personal information, contact details, or KYC required. Just set up your wallet and go.',
    iconName: 'shield-lock-outline',
    hasAdditional: false,
    id: 5
},
{
    title: 'Fee control',
    subtitle: 'Transaction costs can be kept low with SegWit and customizable fees.',
    iconName: 'swap-horizontal',
    hasAdditional: true,
    id: 6
},
]

function getCards() {
    const cardsList = cards;
    return cardsList;
}

const common = {
    getCards,
};

export default common;