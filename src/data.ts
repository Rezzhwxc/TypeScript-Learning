// enum VocaloidId{
//     Miku = 1,
//     Teto = 2,
//     Duo = 3
// }
// interface VocaloidInfo{
//     id: VocaloidId,
//     name: string
// }
// interface TrackInfo{
//     readonly id: number,
//     title: string,
//     audioPath: string,
//     coverPath: string,
//     vocaloidId: VocaloidId
// }

// // 

// type TrackPreview = Omit<TrackInfo, 'audioPath' | 'vocaloidId'>
// type TrackAudio = Pick<TrackInfo, 'audioPath'>

type TaskStatus = 'active' | 'done';
type TaskLevel = 'low' | 'medium' | 'high';

interface Task {
    id: number,
    title: string,
    status: TaskStatus,
    level: TaskLevel,
    createdAt: number,
    editedAt: number
}