// src/constants/products.ts

export interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
    category: string;
    description?: string;
    detailsImages?: string[];
    pointValue?: string;
    bonusValue?: string;
}

export const ALL_PRODUCTS: Product[] = [
    // --- CHANGE UP (Микробиом арьс арчилгаа) ---
    { 
        id: "c1", 
        name: "Skin Biome Enzyme Massage & Deep Cleansing", 
        price: 103000, 
        image: "/c1.png", 
        category: "Cleanser",
        description: "Нүүрний арьсыг цочроохгүй тул цардуулаар баялаг тус бүтээгдэхүүн нь синтетик серфактант агуулаагүй тул хүүхдийн хэрэглээ болон эмзэг толгойн арьсанд ч хэрэглэж болно. Арьсны микробиомын тэнцвэрийг хадгалж зохицуулдаг бичил биетийн эслэгийн уусмал нь арьсны эрүүл мэндэд тустай.",
        detailsImages: ["/c1-1.jpg", "/c1-2.jpg"],
        pointValue: "39,000PV",
        bonusValue: "17,700BV"
    },
    { 
        id: "c2", 
        name: "Skin Biome Enzyme Massage & Cellulose Peeling Gel", 
        price: 182000, 
        image: "/c2.png", 
        category: "Peeling",
        description: "Гол орц нь хүчтэй хүчил биш эслэг тул тодорхой хэмжээний үхжсэн арьсыг л гуужуулах бөгөөд арьсыг хамгаалахын зэрэгцээ арьсны микробиомыг тэнцвэржүүлэхийн тулд бичил биетийн эслэгийн уусмалыг нэмснээр арьсыг чийгшүүлж, тайвшруулна.",
        detailsImages: ["/c2-1.jpg", "/c2-2.jpg"],
        pointValue: "69,000PV",
        bonusValue: "31,300BV"
    },
    { 
        id: "c3", 
        name: "Skin Shield & Moisturizing Cream", 
        price: 103000, 
        image: "/c3.png", 
        category: "Cream",
        description: "Олон төрлийн пептид, бичил биетийн эслэгийн уусмал агуулсан тул нимгэн, эмзэг арьсанд хэрэглэхэд тохиромжтой бөгөөд эмзэг арьсанд намар, өвлийн улиралд суурь арчилгааны сүүлчийн шатанд хэрэглэнэ. Хуурай арьсанд олон дахин нэмж түрхсэнээр чийгшил өгнө.",
        detailsImages: ["c3-1.jpg"],
        pointValue: "39,000PV",
        bonusValue: "17,700BV"
    },
    { 
        id: "c4", 
        name: "Skin Biome Daily Sun-Up Gel (SPF46/PA++)", 
        price: 103000, 
        image: "/c4.png", 
        category: "Sun Care",
        description: "Ургамлын ханд, пептид, пробиотик эслэгийн уусмал зэргийг агуулсан тул арьсны микробиомын тэнцвэр, хамгаалалтын давхаргыг нарнаас хамгаалах тос.",
        detailsImages: ["/c4-1.jpg"],
        pointValue: "39,000PV",
        bonusValue: "17,700BV"
    },
    { 
        id: "c5", 
        name: "Skin Biome Natural Tone Up BB", 
        price: 103000, 
        image: "/c5.png", 
        category: "BB Cream",
        description: "Зуурамтгай бус тосон бүтэцтэй бөгөөд арьсанд ашигтай бичил биетийн эслэгийн уусмал, ургамлын ханд, пептид зэргийг агуулсан тул арьсыг хамгаалах чадварыг нэмэгдүүлж, арьсыг илүү гэрэлтүүлнэ.",
        detailsImages: ["/c5-1.jpg"],
        pointValue: "39,000PV",
        bonusValue: "17,700BV"
    },

    // --- REMOZAR (Эсийн нөхөн сэргээлт) ---
    { 
        id: "r1", 
        name: "Various Improvements Serum", 
        price: 182000, 
        image: "/r1.png", 
        category: "Serum",
        description: "Цайруулах, үрчлээний эсрэг үйлчилгээтэй. Эсийн тэжээл өгч, эсийг тэжээлээр хангаж, нөхөн төлжилтийг дэмжинэ. 4 төрлийн эслэгийн уусмал болон пептидүүд (Peptides) агуулсан. Центелла Азиатика (Centella asiatica) хэрэглэх арга: өглөө болон өдөр бүр зузаан түрхэнэ.",
        detailsImages: [""],
        pointValue: "69,000PV",
        bonusValue: "31,300BV"
    },
    { 
        id: "r2", 
        name: "Natural Nutrition Oil Serum", 
        price: 182000, 
        image: "/r2.png", 
        category: "Serum",
        description: "Цайруулах, үрчлээний эсрэг, эсийг тэжээх үйлчилгээтэй. Арьсны тэнцвэрийг хадгална, эсийг тэжээл, амин хүчлээр дүүргэж, нөхөн төлжилтийг идэвхжүүлнэ. Байгалийн гаралтай тосны агууламжтай, химийн нэмэлт агуулаагүй. Арьсны эсэд гүн нэвтэрч үйлчилнэ. Булчингийн массаж хийхэд тохиромжтой бүтэц. Ус ба тосны тэнцвэрийг сэргээж, арьсыг хамгаална.",
        detailsImages: [""],
        pointValue: "69,000PV",
        bonusValue: "31,300BV"
    },
    { 
        id: "r3", 
        name: "Nutrition & Whitening Vitamin Serum", 
        price: 182000, 
        image: "/r3.png", 
        category: "Serum",
        description: "Антиоксидант, Витамин С, антоцианин, флавоноидуудаар баялаг. Матрикариа цэцэг (Витамин С), токоферол (Витамин Е)-ийн найрлагатай. Пантотений хүчил (Витамин В5), Витамин Complex (HD) нь эсийн хуваагдлыг хурдасгаж, эсийг сэргээж олон төрлийн үрэвсэл болон арьсны өвчнийг эдгээж арьсыг арчлахад тусалдаг. Сэвх нөсөө толбо арилгаж арьс цайруулна.",
        detailsImages: [""],
        pointValue: "69,000PV",
        bonusValue: "31,300BV"
    },
    { 
        id: "r4", 
        name: "Recovery & Revital Serum", 
        price: 182000, 
        image: "/r4.png", 
        category: "Serum",
        description: "Гэмтсэн арьсыг төлжүүлэх туслах найрлагатай бөгөөд эмзэг арьстай хүн хэрэглэхэд тохиромжтой. Маш хуурай арьсанд ч удаан өмнө хэрэглэж болно. Хөргөгчинд хадгалж хэрэглэх нь тохиромжтой.",
        detailsImages: ["/r4-1.jpg"],
        pointValue: "69,000PV",
        bonusValue: "31,300BV"
    },
    { 
        id: "r5", 
        name: "Skin Biom Serum", 
        price: 182000, 
        image: "/r5.png", 
        category: "Serum",
        description: "Арьсны төрөлх чанарыг бэхжүүлж, эрүүл болгох серум. Пробиотикиийн комплекс, сүүн хүчлийн бактери нь арьсны чийгшлийн ханыг бэхжүүлж идэвхт батга, экзем, псориаз, атопи гэх зэрэг арьсны асуудлуудыг шийднэ. Байцаа 10%, сонгины ханд 10% агуулсан тул арьсны тэнцвэрийг тэнцвэржүүлнэ.",
        detailsImages: ["r5-1.jpg"],
        pointValue: "69,000PV",
        bonusValue: "31,300BV"
    },
    { 
        id: "r6", 
        name: "Remozar Recovery & Revital Cream", 
        price: 262000, 
        image: "/r6.png", 
        category: "Cream",
        description: "Нөхөн сэргээх тос. Цайруулах, үрчлээ арилгах үйлчилгээтэй. Арьсанд тэжээл өгч, чийгшүүлэх найрлагаар дүүргэж өгнө. Тос болон чийгшүүлэх найрлагаар ус, тосны балансыг тэнцвэржүүлж витамин С болон глутатионоор арьсыг гэрэлтүүлнэ. Шинэ үеийн витамин С-ийн дериватив ET-VC Цэвэр витамин С (аскорбины хүчил)-ийн дериватив нь цайруулах, үрчлээ багасгах үйлчилгээтэй.",
        detailsImages: ["/r6-1.png", "/r6-2.jpg"],
        pointValue: "99,000PV",
        bonusValue: "45,000BV"
    },
    { 
        id: "r7", 
        name: "Remozar Whitening Toner", 
        price: 103000, 
        image: "/r7.png", 
        category: "Toner",
        description: "Цайруулагч тоник. Цайруулах, үрчлээний эсрэг. Арьс өнгөхөд гойд нөлөө бүхий пептид зэрэг найрлагатай бөгөөд тус бүтээгдэхүүнийг хэрэглэснээр нүх, өнгөн үрчлээ, өнгө сэргээх зэрэг арьсны олон асуудлыг шийдэх боломжтой. Арьс арчилгааны хамгийн эхний шатанд хэрэглэх бүтээгдэхүүн юм.",
        detailsImages: ["/r7-1.jpg"],
        pointValue: "39,000PV",
        bonusValue: "17,700BV"
    },

    // --- AROS (30, 40 насны арчилгаа) ---
    { 
        id: "a1", 
        name: "Skindeep Overflow Nutrition Cream", 
        price: 129000, 
        image: "/a1.png", 
        category: "Cream",
        description: "Remozar бүтээгдэхүүнийг бодвол липосомын хэмжээг багасгаж 30-40 насныханд тохирсон тус бүтээгдэхүүн нь байгалийн чийгшүүлэгч бодис, 5 төрлийн пептид агуулсан тул арьсыг сайн чийгшүүлж, уян хатан байхад тусална.",
        detailsImages: ["/a1-1.jpg"],
        pointValue: "49,000PV",
        bonusValue: "22,200BV"
    },
    { 
        id: "a2", 
        name: "Skindeep Whitening Toner", 
        price: 87000, 
        image: "/a2.png", 
        category: "Toner",
        description: "Байгалийн чийгшүүлэгч бодис, 5 төрлийн пептид агуулсан тус бүтээгдэхүүн нь нүх, өнгөн үрчлээ, өнгө сэргээх зэрэг арьсны олон асуудлыг шийдэхэд хэрэглэх боломжтой.",
        detailsImages: ["/a2-1.jpg"],
        pointValue: "33,000PV",
        bonusValue: "15,000BV"
    },
    { 
        id: "a3", 
        name: "Skindeep Treatment Oil Serum", 
        price: 111000, 
        image: "/a3.png", 
        category: "Serum",
        description: "Идебеноны найрлага болон 8 төрлийн байгалийн гаралтай тос агуулсан тус серум нь хуурайшсан арьсыг эрүүл, чийглэг болгоно. Ус тосны тэнцвэрийг тэнцвэржүүлнэ.",
        detailsImages: ["/a3-1.jpg"],
        pointValue: "21,000PV",
        bonusValue: "9,500BV"
    },
    { 
        id: "a4", 
        name: "Skindeep Basic Serum", 
        price: 111000, 
        image: "/a4.png", 
        category: "Serum",
        description: "Гялуроны хүчил болон 5 төрлийн пептид агуулсан энэхүү байгалийн чийгшүүлэгч бүтээгдэхүүн нь арьсыг гүн чийгшүүлж, уян хатан байдлыг сайжруулна. Батга, үрчлээ, сэвх толбоноос үүссэн асуудалтай хүмүүст тохиромжтой бөгөөд тогтмол хэрэглэснээр арьсны өнгө жигд болж, эрүүл харагдуулна.",
        detailsImages: ["/a4-1.jpg", "/a4-2.jpg"],
        pointValue: "42,000PV",
        bonusValue: "19,000BV"
    },
    { 
        id: "a5", 
        name: "Skindeep Anti-Aging & Whitening Serum", 
        price: 111000, 
        image: "/a5.png", 
        category: "Serum",
        description: "Энэ нь цайруулахад туслах ниацинамид, 3-O-этил-аскорбины хүчил зэрэг бодисуудыг агуулсан бөгөөд липосомын технологиор дамжуулан коэнзим Q агуулснаар арьсыг эрүүл байхад тусална.",
        detailsImages: ["/a5-1.jpg"],
        pointValue: "42,000PV",
        bonusValue: "19,000BV"
    },

    // --- МACH & БУСАД ---
    { 
        id: "a6", 
        name: "Mach Уургийн маск", 
        price: 262000, 
        image: "/a6.png", 
        category: "Mask",
        description: "Арьсны эсийн түвшний нөхөн сэргээгч. Масгүйгээр гойд нөлөө үзүүлэн нөхөн төлжүүлж, арьсны унасан тэжээлийг эргэн сэргээнэ. 20 гаруй төрлийн амин хүчил, 12 төрлийн пептид (Peptide complex), 7 төрлийн эмийн ургамлын ханд, байгалийн антиоксидант үйлчилгээ үзүүлнэ.",
        detailsImages: ["/a6-1.jpg"],
        pointValue: "99,000PV",
        bonusValue: "45,000BV"
    },
];

export const CATEGORIES = ["All", "Serum", "Cream", "Toner", "Cleanser", "Sun Care", "Peeling", "BB Cream", "Mask"];