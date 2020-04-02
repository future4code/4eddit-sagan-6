import React from 'react';
import styled from 'styled-components';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CardActions from '@material-ui/core/CardActions';
import CommentIcon from '@material-ui/icons/Comment';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import {
    FacebookShareButton, RedditShareButton, TwitterShareButton, WhatsappShareButton,
} from "react-share";

import {
    FacebookIcon,
    RedditIcon,
    TwitterIcon,
    WhatsappIcon,
} from "react-share";

const CardHeaderTitle = styled(CardHeader)`
    cursor: pointer;
`

const Post = props => {
    return (
        <Card>
            <CardHeaderTitle
                avatar={<Avatar>{props.avatar}</Avatar>}
                title={props.title}
                subheader={props.name}
                onClick={props.postDetail}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.text}
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton
                    onClick={() => props.handleDeslikePost(-1, props.id)}>
                    <ArrowDownwardIcon
                        color={props.userVoteDirection >= 0 ? '' : 'secondary'} />
                </IconButton>
                <p>{props.votesCount}</p>
                <IconButton
                    onClick={() => props.handleLikePost(1, props.id)}>
                    <ArrowUpwardIcon
                        color={props.userVoteDirection <= 0 ? '' : 'primary'} />
                </IconButton>
                {props.showCommentIcon === false ? false :
                    <IconButton onClick={props.postDetail}>
                        <CommentIcon />
                    </IconButton>}
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