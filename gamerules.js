import React from 'react';
import './gamerules.css';
import f from "./Assets/f.png";
import e from "./Assets/e.png";
import d from "./Assets/d.png";
import c from "./Assets/c.png";
import b from "./Assets/b.png";
import a from "./Assets/a.png";

function Gamerules () {
    return(
        <div className="rules">
            <div className="card">
                <div className ="card-content">
            <h4>Game Rule</h4>
            <p>This is a two-player board game consisting of 64 (8x8) squares arranged in alternating light & dark colors and 32 Chess pieces. 
                There are six different type of chess pieces, each of which move can move in their own unique way.
                The objective is to protect your most valuable  piece, the king, and trap (checkmate) your opponent’s king.</p>
                </div>
                </div>
            
        
         <div className="grid-container">
                <div className="box1">
                    <div className="case">
                    <img src ={c}  className="ap" alt="ap"/> 
                    </div>
                    <h4>Pawn</h4>
                    <p>Can only move once.
                        Moves twice on its first move.</p>
                        </div>

                        <div className="box1">
                    <div className="case">
                    <img src ={b}  className="ap" alt="b"/> 
                    </div>
                    <h4>King</h4>
                    <p>Restricted to one move per-turn. 
                        Can move in any direction.</p>
                        </div>

                        <div className="box1">
                    <div className="case">
                    <img src ={a} className="ap" alt="c"/> 
                    </div>
                    <h4>Rook</h4>
                    <p>Only moves straight and can move as far as its line of sight.</p>
                        </div>

                        <div className="box1">
                    <div className="case">
                    <img src ={d} className="ap" alt="d"/> 
                    </div>
                    <h4>Bishop</h4>
                    <p>Moves diagonally and can move as far as its lune of sight.</p>
                        </div>

                        <div className="box1">
                    <div className="case">
                    <img src ={e} className="ap" alt="e"/> 
                    </div>
                    <h4> Queen</h4>
                    <p>Can move & capture on any square in line of sight</p>
                        </div>

                         <div className="box1">
                    <div className="case">
                    <img src ={f} className="ap" alt="f"/> 
                    </div>
                    <h4>Knight</h4>
                    <p>Moves in an L-shape: 2 up 1 left or 1 up 2 left or right</p>
                        </div>

                        </div>
                        
                        </div>
                        

                   

        
    )
}


export default Gamerules;