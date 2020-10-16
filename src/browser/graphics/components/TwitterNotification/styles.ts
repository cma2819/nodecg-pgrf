import vuetify from '../../../plugin/vuetify';

export const tweetStyles: {
    solo: TwitterNotificationTweetStyle;
    race: TwitterNotificationTweetStyle;
} = {
    solo: {
        panel: {
            position: 'absolute',
            paddingLeft: '17px',
            top: '0px',
            left: '0px',
            width: '796px',
            height: '290px',
            background: vuetify.framework.theme.themes.light.info,
            borderRadius: '30px 0px 0px 30px',
            overflowY: 'hidden'
        },
        username: {
            position: 'absolute',
            top: '9px',
            left: '72px',
            font: 'bold 30px/44px source-han-sans-japanese',
            color: '#EEEEEE'
        },
        nickname: {
            position: 'absolute',
            top: '35px',
            width: '486px',
            font: 'Bold 30px/45px source-han-sans-japanese',
            letterSpacing: 0,
            color: '#ffffff',
            overflowX: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis'
        },
        content: {
            position: 'absolute',
            top: '58px',
            paddingRight: '2px',
            paddingBottom: '2px',
            font: 'bold 30px/44px source-han-sans-japanese',
            letterSpacing: 0,
            color: '#ffffff'
        },
        icon: {
            margin: '12px 17px',
            width: '43px',
            height: '43px'
        }
    },
    race: {
        panel: {
            position: 'absolute',
            top: '0px',
            left: '0px',
            width: '1031px',
            height: '157px',
            background: vuetify.framework.theme.themes.light.info,
            borderRadius: '0px 0px 30px 0px'
        },
        username: {
            position: 'absolute',
            top: '9px',
            left: '71px',
            font: 'bold 25px/26px source-han-sans-japanese',
            color: '#eeeeee'
        },
        nickname: {
            position: 'absolute',
            top: '39px',
            left: '102px',
            width: '180px',
            font: 'Bold 30px/45px source-han-sans-japanese',
            letterSpacing: 0,
            color: '#ffffff',
            overflowX: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis'
        },
        content: {
            position: 'absolute',
            top: '60px',
            left: '12px',
            height: '157px',
            paddingRight: '5px',
            overflowY: 'hidden',
            font: 'bold 20px/29px source-han-sans-japanese',
            letterSpacing: 0,
            color: '#ffffff',
            textOverflow: 'ellipsis'
        },
        icon: {
            margin: '5px 16px',
            width: '43px',
            height: '43px'
        }
    }
};

export interface TwitterNotificationTweetStyle {
    panel: object;
    username: object;
    nickname: object;
    content: object;
    icon: object;
}

export const hashtagStyles: {
    solo: TwitterNotificationHashtagStyle;
    race: TwitterNotificationHashtagStyle;
} = {
    solo: {
        panel: {
            position: 'absolute',
            paddingLeft: '148px',
            top: '0px',
            left: '0px',
            width: '796px',
            height: '127px',
            background: vuetify.framework.theme.themes.light.info,
            borderRadius: '30px 0px 0px 30px'
        },
        tweetOn: {
            position: 'absolute',
            top: '8px',
            font: '30px/38px source-han-sans-japanese',
            color: '#ffffff'
        },
        hashtag: {
            position: 'absolute',
            top: '35px',
            paddingLeft: '2rem',
            font: 'bold 62px/80px source-han-sans-japanese',
            letterSpacing: 0,
            color: '#ffffff'
        },
        icon: {
            width: '125px',
            height: '125px'
        }
    },
    race: {
        panel: {
            position: 'absolute',
            top: '0px',
            left: '0px',
            width: '305px',
            height: '201px',
            background: '#ABE8FFB3 0% 0% no-repeat padding-box',
            border: '5px solid #1DA1F2',
            borderRadius: '44px 0px 0px 44px'
        },
        tweetOn: {
            position: 'absolute',
            top: '30px',
            left: '117px',
            font: 'Bold 40px/51px futura-pt-bold',
            color: '#ffffff'
        },
        hashtag: {
            position: 'absolute',
            left: '19px',
            bottom: '30px',
            font: 'Bold 48px/61px futura-pt-bold',
            letterSpacing: 0,
            color: '#ffffff'
        },
        icon: {
            width: '88px',
            height: '88px'
        }
    }
}

export interface TwitterNotificationHashtagStyle {
    panel: object;
    tweetOn: object;
    hashtag: object;
    icon: object;
}