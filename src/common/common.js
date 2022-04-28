import icon1 from "../assets/apple.png"

const cards = [{
    title: 'Singlesig Support',
    subtitle: 'Simple to use, easy to set up. Spend your funds using your keys with any app that supports common wallet standards.',
    src: icon1,
    hasAdditional: false,
    id: 1
},
{
    title: 'Market Rate',
    subtitle: 'Bitcoin market prices are available in 37 different currencies.',
    src: icon1,
    hasAdditional: true,
    id: 2
},
{
    title: 'Watch only wallets',
    subtitle: 'Easy to connect with your cold wallet and receive transactions.',
    src: icon1,
    hasAdditional: true,
    id: 3
},
{
    title: 'Notifications',
    subtitle: 'Get notified of all transactions you are sending and receiving.',
    src: icon1,
    hasAdditional: true,
    id: 4
},
{
    title: 'Privacy',
    subtitle: 'No documents, personal information, contact details, or KYC required. Just set up your wallet and go.',
    src: icon1,
    hasAdditional: false,
    id: 5
},
{
    title: 'Fee control',
    subtitle: 'Transaction costs can be kept low with SegWit and customizable fees.',
    src: icon1,
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