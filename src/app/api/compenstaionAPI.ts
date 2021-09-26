import { Orderstypes } from './../interfaces/orderstypes';

export const clientData:Orderstypes[] = [
    {
        case:'طلب كاش العميل ماكد على المندوب والمندوب تأخر فالطلب اكتر من ساعه ونص',
        action:'YES'
    },

    {
        case:'المندوب اخطأ فى الطلب ولم ياتى بالاغراض بشكل مظبوط',
        action:'YES'
    },

    {
        case:'العميل طلب من مطعم والمندوب لقاه مغلق تعويض العميل ب 5 ريال /العميل ابلغنا ان المطعم كان مفتوح فالابلكيشن',
        action:'YES'
    },

    {
        case:'الطلب فود اونلاين و الفاتوره واضح انها في ايتم ناقص ',
        action:'YES'
    },

    {
        case:'العميل لم ياكد على المندوب فالمحادثة ومنتظر الطلب اكتر من ساعه ونص',
        action:'NO'
    },

    {
        case:'المندوب اخذ فلوس اكتر من حق الطلب من العميل',
        action:'NO'
    },

    {
        case:'المندوب اخذ فلوس زيادة لياتى بصرف',
        action:'NO'
    },

    {
        case:'العميل اكد على المندوب فالمحادثة ومنتظر الطلب اكتر من ساعه ونص',
        action:'YES'
    },
   
];


export const delegateData:Orderstypes[] = [
    {
        case:'المندوب اكد على العميل واشترى الطلب والعميل لم يستلم الطلب',
        action:'YES'
    },

    {
        case:'المندوب لم يأكد على العميل واشترى الطلب والعميل لم يستلم الطلب',
        action:'NO'
    },

    {
        case:'العميل حط اللوكيشن غلط و المندوب استلم الطلب و العنوان ابعد من الموجود في الطلب ',
        action:'YES'
    },

]


export const restaurantData:Orderstypes[] = [
    {
        case:'طلب FOOD ONLINE المندوب استلم الطلب وسلم الى العميل والعميل لم يدفع قيمة الطلب',
        action:'YES'
    }
]