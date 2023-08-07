import * as React from 'react';
import { IMatchListEntry } from '../types/types';
import {MatchTable} from "./match-table";

interface IScoreboardProps {
  initialList: IMatchListEntry[];
}

export const Scoreboard = (props:IScoreboardProps) => {
  const [list, setList] = React.useState(Array.isArray(props.initialList)? props.initialList : [])

  return <div>
    <button>Add</button>
    <MatchTable list={list} />
  </div>;
};
