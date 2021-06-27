import React from 'react'
import {Grid,Card,Typography,CardContent,List,ListItem,ListItemAvatar,Avatar,ListItemText} from '@material-ui/core';
import {Table,TableCell,TableRow,TableContainer,TableHead,TableBody} from '@material-ui/core';
import styles from './Competitons.Module.css';


function Competitions({data}) {
  var i;
  for( i = 0 ; i<380;i++)
   {//console.log(data.data.matches[i]);

    return (
         //! Table and TypoGraphy
        <div className={styles.container}> 
             <TableContainer component={Table}>
      <Table className={styles.table}>
          <TableRow>
            <Typography color="textSecondary" variant="overline"></Typography>
            <Typography><TableCell>{data.data.matches[i].homeTeam.name}</TableCell><TableCell>{data.data.matches[i].score.fullTime.homeTeam}-{data.data.matches[i].score.fullTime.awayTeam} <br/>{data.data.matches[i].status}</TableCell><TableCell>{data.data.matches[i].awayTeam.name}</TableCell> </Typography>
          </TableRow>
      </Table>
    </TableContainer>
        </div>

        
    )
   }
}

export default Competitions
