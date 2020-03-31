import React from 'react';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';


const Comment = (props) => {
  return (
    <Card>
      <CardHeader
        title={props.title}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.text}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton>
          <ArrowDownwardIcon />
        </IconButton>
        <IconButton>
          <ArrowUpwardIcon />
        </IconButton>
      </CardActions>
    </Card>

  )
}

export default Comment;