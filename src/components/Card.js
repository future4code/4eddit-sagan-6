import React from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CardActions from '@material-ui/core/CardActions';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';



const Post = props => {
    return (
        <div>
            <Card>
                <CardHeader
                    avatar={
                        <Avatar>
                            {props.avatar}
                    </Avatar>
                    }
                    title={props.title}
                    subheader={props.date}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.text}
        </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <ArrowDownwardIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                    <ArrowUpwardIcon />
                    </IconButton>
                    <IconButton
                    //   onClick={handleExpandClick}
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </div>
    )
}

export default Post