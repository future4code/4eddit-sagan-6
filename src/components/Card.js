import React from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CardActions from '@material-ui/core/CardActions';
import CommentIcon from '@material-ui/icons/Comment';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

import {
    EmailShareButton,
    FacebookShareButton,
    InstapaperShareButton,
    LineShareButton,
    LinkedinShareButton,
    LivejournalShareButton,
    MailruShareButton,
    OKShareButton,
    PinterestShareButton,
    PocketShareButton,
    RedditShareButton,
    TelegramShareButton,
    TumblrShareButton,
    TwitterShareButton,
    ViberShareButton,
    VKShareButton,
    WhatsappShareButton,
    WorkplaceShareButton,
} from "react-share";

import {
    EmailIcon,
    FacebookIcon,
    InstapaperIcon,
    LineIcon,
    LinkedinIcon,
    LivejournalIcon,
    MailruIcon,
    OKIcon,
    PinterestIcon,
    PocketIcon,
    RedditIcon,
    TelegramIcon,
    TumblrIcon,
    TwitterIcon,
    ViberIcon,
    VKIcon,
    WeiboIcon,
    WhatsappIcon,
    WorkplaceIcon,
} from "react-share";

const Post = props => {
    return (
        <Card>
            <CardHeader
                avatar={<Avatar>{props.avatar}</Avatar>}
                title={props.title}
                subheader={props.name}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.text}
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton
                    onClick={() => props.handleLikeDeslikePost(-1, props.id)}>
                    <ArrowDownwardIcon
                        color={props.userVoteDirection >= 0 ? '' : 'secondary'} />
                </IconButton>
                <p>{props.votesCount}</p>
                <IconButton
                    onClick={() => props.handleLikeDeslikePost(1, props.id)}>
                    <ArrowUpwardIcon
                        color={props.userVoteDirection <= 0 ? '' : 'primary'} />
                </IconButton>
                <IconButton onClick={props.postDetail}>
                    {props.showCommentIcon === false ? ' ' : <CommentIcon />}
                </IconButton>
                <FacebookShareButton url={props.url} title={props.title}>
                    <FacebookIcon size={28} round={true} />
                </FacebookShareButton>
                <TwitterShareButton url={props.url} title={props.title}>
                    <TwitterIcon size={28} round={true} />
                </TwitterShareButton>
                <RedditShareButton url={props.url} title={props.title}>
                    <RedditIcon size={28} round={true} />
                </RedditShareButton>
                <WhatsappShareButton url={props.url} title={props.title}>
                    <WhatsappIcon size={28} round={true} />
                </WhatsappShareButton>
            </CardActions>
        </Card>

    )
}

export default Post