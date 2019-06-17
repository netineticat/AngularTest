import { User } from './user'
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'

export const MOCKUSER: User = {


    id: -1,
    name: 'Mock Taro',
    icon: 'assets/mockicon.png',
    sanitizedIcon: '',
    following: [
        {
            id: -1,
            name: 'following1',
            sanitizedIcon: '',
            icon: '',
            following: [],
            followed: [],
            description: ''
        },
        {
            id: -1,
            name: 'following2',
            icon: '',
            sanitizedIcon: '',
            following: [],
            followed: [],
            description: ''
        },
        {
            id: -1,
            name: 'following3',
            icon: '',
            sanitizedIcon: '',
            following: [],
            followed: [],
            description: ''
        }
    ],
    followed: [
        {
            id: -1,
            name: 'followed1',
            icon: '',
            sanitizedIcon: '',
            following: [],
            followed: [],
            description: ''
        },
        {
            id: -1,
            name: 'followed2',
            icon: '',
            sanitizedIcon: '',
            following: [],
            followed: [],
            description: ''
        },
        {
            id: -1,
            name: 'followed3',
            icon: '',
            sanitizedIcon: '',
            following: [],
            followed: [],
            description: ''
        }
    ],
    description: '大学2年生です。初心者ですが、よろしくお願いいたします！'

}