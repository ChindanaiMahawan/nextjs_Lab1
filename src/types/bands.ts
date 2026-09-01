//ผมทำการสร้าง type Bandmemeber เพื่อจะสามารถนำมาเก็บ data ที่เป็นรูปภาพและชื่อได้
export type BandMember = {
    name: string;
    image?: string;
};

export type Band = {
    id: number;
    name_of_bands: string;
    music_advic: string[];
    info: string;
    image?: string;
    memberimage :BandMember[];
};