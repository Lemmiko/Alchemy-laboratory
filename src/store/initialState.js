const initialState = {
    components: [
        'Пшеница',
        'Жир тролля',
        'Корень Нирна',
        'Корень жарницы',
        'Лютый гриб',
        'Сердце даэдра',
        'Гниль Намиры',
        'Ядовитый цветок'
    ],
    currentComponents: [
        {title: null, key: 1},     
        {title: null, key: 2},  
        ],
    potions: [],
    modal: {
        isToggle: false,
        isCreated: false,
        isFull: false,
        potion: ''
    }
}

export default initialState