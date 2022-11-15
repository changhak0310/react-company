import { atom } from 'recoil'

export const darkModeAtom = atom({
    key: 'darkMode',
    default: 'light'
})

export const isLoginAtom = atom({
    key: 'isLogin',
    default: true
})