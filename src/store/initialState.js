const initialState = {
    components: [
        'Пушница',
        'Жир тролля',
        'Корень Нирна',
        'Паслён',
        'Лютый гриб',
        'Белянка',
        'Сердце даэдра',
        'Гниль Намиры'
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