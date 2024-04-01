//import { ADD_TODO } from "./ActionType"

import { CHANGE_THEME, CURRENT_THREAD, CURRENT_THREAD_DATA, GET_DATA, GET_TOKEN } from "./ActionType"

const initState = {
    theme: "dark",
    listmail:[
        {
          id: 3,
          fromName: "Shaw Adley",
          fromEmail: "shaw@getmemeetings.com",
          toName: "Mitrajit",
          toEmail: "mitrajit2022@gmail.com",
          cc: null,
          bcc: null,
          threadId: 1,
          messageId: "<a5dcWbm1ac5e46d38746648c3e2f6d2c@getmemeetings.com>",
          inReplyTo: "<4a5cWemdbfda475fabaf856ef5e806a7@gmail.com>",
          references: "<4a5cWemdbfda475fabaf856ef5e806a7@gmail.com>",
          subject:
            "Shaw - following up on our meeting last week",
          body: "<p>Hi Mitrajit,</p><p>Just wondering if you&rsquo;re still interested.</p><p>Regards,<br/>Shaw Adley</p><p>6KG634E practicecowboy</p>",
          isRead: true,
          folder: "INBOX",
          uid: 594,
          sentAt: "2023-11-23T04:08:45.000Z",
          archivedAt: null,
          createdAt: "2023-11-23T07:38:46.000Z",
          updatedAt: "2023-11-23T07:38:46.000Z",
          deletedAt: null,
        },
        {
          id: 4,
          fromName: "Shaw Adley",
          fromEmail: "shaw@getmemeetings.com",
          toName: "Mitrajit",
          toEmail: "mitrajit2022@gmail.com",
          cc: null,
          bcc: null,
          threadId: 2,
          messageId: "<a5dcWbm1ac5e46d38746648c3e2f6d2c@getmemeetings.com>",
          inReplyTo: "<4a5cWemdbfda475fabaf856ef5e806a7@gmail.com>",
          references: "<4a5cWemdbfda475fabaf856ef5e806a7@gmail.com>",
          subject: "Test mail",
          body: "<p>Test mail</p>",
          isRead: true,
          folder: "INBOX",
          uid: 594,
          sentAt: "2023-11-23T04:08:45.000Z",
          archivedAt: null,
          createdAt: "2023-11-23T07:38:46.000Z",
          updatedAt: "2023-11-23T07:38:46.000Z",
          deletedAt: null,
        },
        {
          id: 5,
          fromName: "Shaw Adley",
          fromEmail: "shaw@getmemeetings.com",
          toName: "Sandhya",
          toEmail: "sandhya@gmail.com",
          cc: null,
          bcc: null,
          threadId: 2,
          messageId: "<a5dcWbm1ac5e46d38746648c3e2f6d2c@getmemeetings.com>",
          inReplyTo: "<4a5cWemdbfda475fabaf856ef5e806a7@gmail.com>",
          references: "<4a5cWemdbfda475fabaf856ef5e806a7@gmail.com>",
          subject: "Test mail",
          body: "<p>Test mail</p>",
          isRead: true,
          folder: "INBOX",
          uid: 594,
          sentAt: "2023-11-23T04:08:45.000Z",
          archivedAt: null,
          createdAt: "2023-11-23T07:38:46.000Z",
          updatedAt: "2023-11-23T07:38:46.000Z",
          deletedAt: null,
        },
      ],
    curThreadId:null,
    curThreadData:[],
    token:null
}

export const Reducer = (state= initState, {type,payload})=>{
    switch(type){
        case CHANGE_THEME: 
            return {
                ...state,
                theme:payload
            }
        case GET_TOKEN:
            return{
                ...state,
                token:payload
            }
        case GET_DATA:
            return{
                ...state,
                listmail: payload
            }
        case CURRENT_THREAD:
            return{
                ...state,
                curThreadId: payload
            }
        case CURRENT_THREAD_DATA:
            return{
                ...state,
                curThreadData: payload
            }
        default: return state
    }
}