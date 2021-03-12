const stateDefault = {
    banChon: 'Tài',
    soBanThang: 0,
    tongSoBan: 0,
    mangXucXac: [
        {diem:1,hinhAnh:'./img/1.png'},
        {diem:2,hinhAnh:'./img/2.png'},
        {diem:3,hinhAnh:'./img/3.png'}
    ]
}

export const gameReducer = (state=stateDefault,action) => {

    switch(action.type){
        case 'PLAY_GAME':{
            let mangUpdate = [...state.mangXucXac];

            mangUpdate.forEach((item,index) => {
                let numRandom = (Math.floor(Math.random() * 6) + 1);

                mangUpdate[index].hinhAnh = `./img/${numRandom}.png`;
                mangUpdate[index].diem = numRandom;
            })

            state.mangXucXac = mangUpdate;
            return {...state}
        }
        case 'BAN_CHON':{
            state.banChon = action.banChon
            return {...state}
        }
        case 'END_GAME': {
            let sumPoint = state.mangXucXac.reduce((sum, item, index) => {

                return sum += item.diem; 
            },0)

            if((sumPoint >= 11 && state.banChon === 'Tài') || (sumPoint < 11 && state.banChon === 'Xỉu')){
                state.soBanThang += 1;
            }

            state.tongSoBan += 1;
            return {...state}
        }
        // Nếu không có xảy ra action nào thì trả về state mặc định
        default: return {...state}
    }
}