import '../styles/home.css'
import { useMemo, useEffect } from "react";
import AOS from 'aos';

import WorldMap from './components/WorldMap';
import BouncingBall from './components/BouncingBall';

import atlanta from '../assets/teams/atlanta.png';
import bucks from '../assets/teams/bucks.png';
import bulls from '../assets/teams/bulls.png';
import pels from '../assets/teams/pels.png';
import cavs from '../assets/teams/cavs.png';
import celtics from '../assets/teams/celtics.png';
import clip from '../assets/teams/clip.png';
import heat from '../assets/teams/heat.png';
import hornets from '../assets/teams/hornets.png';
import hou from '../assets/teams/hou.png';
import jazz from '../assets/teams/jazz.png';
import kings from '../assets/teams/kings.png';
import knicks from '../assets/teams/knicks.png';
import lal from '../assets/teams/lal.png';
import mavs from '../assets/teams/mavs.png';
import memph from '../assets/teams/memph.png';
import nets from '../assets/teams/nets.png';
import nuggets from '../assets/teams/nuggets.png';
import okc from '../assets/teams/okc.png';
import orlando from '../assets/teams/orlando.png';
import pacers from '../assets/teams/pacers.png';
import phil from '../assets/teams/phil.png';
import pistons from '../assets/teams/pistons.png';
import port from '../assets/teams/port.png';
import spurs from '../assets/teams/spurs.png';
import suns from '../assets/teams/suns.png';
import toronto from '../assets/teams/toronto.png';
import warriors from '../assets/teams/warriors.png';
import wizards from '../assets/teams/wizards.png';
import wolves from '../assets/teams/wolves.png';

import jokic from '../assets/playersNBA/jpkic.png';
import curry from '../assets/playersNBA/curry.png';
import damian from '../assets/playersNBA/damian.png';
import durant from '../assets/playersNBA/durant.png';
import giannis from '../assets/playersNBA/giannis.png';
import jordan from '../assets/playersNBA/jordan.png';
import lebron from '../assets/playersNBA/lebron.png';
import tatum from '../assets/playersNBA/tatum.png';
import giannisDos from '../assets/playersNBA/giannisDos.png';
import irving from '../assets/playersNBA/irving.png';
import little from '../assets/playersNBA/little.png';
import luka from '../assets/playersNBA/luka.png';
import tim from '../assets/playersNBA/tim.png';
import brown from '../assets/playersNBA/brown.png';
import durantDos from '../assets/playersNBA/durantDos.png';
import lebronDos from '../assets/playersNBA/lebronDos.png';

import fisicoStats from '../assets/graphs/fisico_stats.png';
import desempeñoStats from '../assets/graphs/desempeño_stats.png';
//import worldHeatMap from '../assets/graphs/worldHeatMap.png';
import alturasBox from '../assets/graphs/alturasBox.png';
import eficienciaBox from '../assets/graphs/eficienciaBox.png';
import puntosPPBox from '../assets/graphs/puntosPPBox.png';
import rebotesPPBox from '../assets/graphs/rebotesPPBox.png';
import lineplotTop from '../assets/graphs/lineplotTop.png';
import pairplotTop from '../assets/graphs/pairplotTop.png';
import ptsTop from '../assets/graphs/ptsTop.png';
import heatMapS from '../assets/graphs/heatmap_seasons.mp4';

import nbaLogo from '../assets/nbaLogo.png';



function CarruselTeams({ right = "0px" }) {

    const temaslogos = {
        0: atlanta, 1: bulls, 2: bucks, 3: pels, 4: cavs, 5: celtics, 6: clip,
        7: heat, 8: hornets, 9: hou, 10: jazz, 11: kings, 12: knicks,
        13: lal, 14: mavs, 15: memph, 16: nets, 17: nuggets, 18: okc,
        19: orlando, 20: wolves, 21: pacers, 22: phil, 23: pistons, 24: port, 
        25: spurs, 26: suns, 27: toronto, 28: warriors, 29: wizards,
    };

    const logos = useMemo(() => {
        return Object.values(temaslogos).sort(() => Math.random() - 0.5);
    }, []); // <- solo se ejecuta una vez

    return (
        <div style={{ position: 'absolute', right, top: '-22px' }}>
            <div className="logosCarousel">
                <div className="logosTrack">
                    {logos.map((src, i) => (
                        <img key={i} src={src} className="logoItem" />
                    ))}

                    {logos.map((src, i) => (
                        <img key={`dup-${i}`} src={src} className="logoItem" />
                    ))}
                </div>
            </div>
        </div>
    );
}

function PlayerSticker({ player = jokic, left = true, top='0vh' }) {
    useEffect(() => {
        AOS.init({
            once: false,  // opcional: anima solo una vez
        });
    }, []);

    const style = {
        position: "absolute",
        zindex: 10,
        ...(left
            ? { left: '-8vw', top, transform: "rotate(25deg)" }
            : { left: "82vw", top, transform: "rotate(-25deg)"}
        )
    };

    return (
        <div data-aos="fade-up" data-aos-duration="600" style={style}>
            <img src={player} alt="nba" style={{width: "400px", height: "auto", opacity: 0.4}} />
        </div>

    );
}



function Home() {


    return (
        <div style={{position: 'relative', width: '100%', overflow: 'hidden'}}>


            <CarruselTeams right='10px'/>
            <CarruselTeams right='130px'/>

            <div className="titlePage">

                <img src={nbaLogo} alt="nba" style={{width: '200px', height: 'auto', position: 'absolute', left: '60vw', top: '10vh'}}/>

                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <p style={{fontStyle: 'italic', margin: 0}}>Sinuhé Tijash Salamanca Ramos</p>
                    <h1 style={{ margin: 0, fontSize: '5em'}}>Jugadores de la NBA</h1>
                    <h1 style={{ margin: 0 }}>(1996 - 2022)</h1>
                    <h2 style={{ marginBottom: 0, marginTop: '5vh' }}>Introducción</h2>
                    <p className='longTexts'>Exploro un dataset de todos los jugadores que han jugado en la NBA en las temporadas 1996-2022. Cada jugador tiene varias columnas con las estadísticas que promedió en esa temporada, lo que permite analizar distintos aspectos de su desempeño, compararlos entre sí y estudiar tendencias a lo largo del tiempo. Con estos datos podemos identificar patrones de rendimiento, evaluar la evolución de jugadores o equipos, y generar visualizaciones que faciliten la comprensión de la información. Este proyecto busca combinar análisis estadístico y visualizaciones interactivas para extraer conclusiones significativas del desempeño en la NBA durante más de dos décadas.</p>
                </div>

            </div>

            <div className='separation'>
                <div style={{width: '100%', justifyContent: 'space-around', alignItems: 'center', height: '20vh', display: 'flex'}}>
                    <div className='randomData'>
                        <h1 style={{ margin: 0 }}>Tamaño del dataset</h1>
                        <p className='longTexts' style={{ margin: 0 }}>12844</p>
                    </div>
                    <div className='randomData'>
                        <h1 style={{ margin: 0 }}>Jugadores analizados</h1>
                        <p className='longTexts' style={{ margin: 0 }}>2551</p>
                    </div>
                    <div className='randomData'>
                        <h1 style={{ margin: 0 }}>Temporadas analizadas</h1>
                        <p className='longTexts' style={{ margin: 0 }}>26</p>
                    </div>
                    <div className='randomData'>
                        <h1 style={{ margin: 0 }}>Variables por jugador</h1>
                        <p className='longTexts' style={{ margin: 0 }}>21</p>
                    </div>
                </div>
                

                <h1 style={{ margin: 0, alignSelf: 'flex-start', marginLeft: '7vw'}}>Variables de cada jugador</h1>
                <div class="table-wrapper">
                    <table class="var-table">
                        <thead>
                            <tr>
                                <th>Nombre de la variable</th>
                                <th>Tipo</th>
                                <th>Descripción</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>player_name</td>
                                <td class="cat">Categórica</td>
                                <td>Nombre del jugador</td>
                            </tr>

                            <tr>
                                <td>team_abbreviation</td>
                                <td class="cat">Categórica</td>
                                <td>Siglas del equipo</td>
                            </tr>

                            <tr>
                                <td>age</td>
                                <td class="num">Numérica</td>
                                <td>Edad del jugador</td>
                            </tr>

                            <tr>
                                <td>player_height</td>
                                <td class="num">Numérica</td>
                                <td>Altura del jugador (cm)</td>
                            </tr>

                            <tr>
                                <td>player_weight</td>
                                <td class="num">Numérica</td>
                                <td>Peso del jugador (kg)</td>
                            </tr>

                            <tr>
                                <td>college</td>
                                <td class="cat">Categórica</td>
                                <td>Universidad de procedencia</td>
                            </tr>

                            <tr>
                                <td>country</td>
                                <td class="cat">Categórica</td>
                                <td>País de nacimiento</td>
                            </tr>

                            <tr>
                                <td>draft_year</td>
                                <td class="cat">Categórica</td>
                                <td>Año del draft</td>
                            </tr>

                            <tr>
                                <td>draft_round</td>
                                <td class="num">Numérica</td>
                                <td>Ronda en la que fue elegido</td>
                            </tr>

                            <tr>
                                <td>draft_number</td>
                                <td class="num">Numérica</td>
                                <td>Posición general del draft</td>
                            </tr>

                            <tr>
                                <td>gp</td>
                                <td class="num">Numérica</td>
                                <td>Partidos jugados</td>
                            </tr>

                            <tr>
                                <td>pts</td>
                                <td class="num">Numérica</td>
                                <td>Puntos por partido</td>
                            </tr>

                            <tr>
                                <td>reb</td>
                                <td class="num">Numérica</td>
                                <td>Rebotes por partido</td>
                            </tr>

                            <tr>
                                <td>ast</td>
                                <td class="num">Numérica</td>
                                <td>Asistencias por partido</td>
                            </tr>

                            <tr>
                                <td>net_rating</td>
                                <td class="num">Numérica</td>
                                <td>Eficiencia neta</td>
                            </tr>

                            <tr>
                                <td>oreb_pct</td>
                                <td class="num">Numérica</td>
                                <td>Porcentaje de rebotes ofensivos</td>
                            </tr>

                            <tr>
                                <td>dreb_pct</td>
                                <td class="num">Numérica</td>
                                <td>Porcentaje de rebotes defensivos</td>
                            </tr>

                            <tr>
                                <td>usg_pct</td>
                                <td class="num">Numérica</td>
                                <td>Porcentaje de uso</td>
                            </tr>

                            <tr>
                                <td>ts_pct</td>
                                <td class="num">Numérica</td>
                                <td>Eficiencia real de tiro</td>
                            </tr>

                            <tr>
                                <td>ast_pct</td>
                                <td class="num">Numérica</td>
                                <td>Porcentaje de asistencias</td>
                            </tr>

                            <tr>
                                <td>season</td>
                                <td class="cat">Categórica</td>
                                <td>Temporada correspondiente</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>

            </div>

            <div className='allSeasons'>
                <h1 style={{ margin: 0, fontSize: '3.5em'}}>26 años de jugadores</h1>

                <PlayerSticker player={jordan} left={true} top={'0px'}/>
                <PlayerSticker player={giannis} left={false} top={'350px'}/>
                <PlayerSticker player={lebron} left={true} top={'700px'}/>
                <PlayerSticker player={tatum} left={false} top={'1050px'}/>
                <PlayerSticker player={durant} left={true} top={'1400px'}/>
                <PlayerSticker player={damian} left={false} top={'1750px'}/>
                <PlayerSticker player={curry} left={true} top={'2100px'}/>
                <PlayerSticker player={luka} left={false} top={'2450px'}/>
                <PlayerSticker player={giannisDos} left={true} top={'2800px'}/>
                <PlayerSticker player={irving} left={false} top={'3150px'}/>
                <PlayerSticker player={little} left={true} top={'3500px'}/>
                <PlayerSticker player={tim} left={false} top={'3850px'}/>
                <PlayerSticker player={brown} left={true} top={'4200px'}/>
                <PlayerSticker player={durantDos} left={false} top={'4550px'}/>
                <PlayerSticker player={lebronDos} left={true} top={'4900px'}/>

                <h3 style={{ marginTop: '5vh', fontSize: '2em', marginBottom: '1vh'}}>Top 10 mejores jugadores</h3>
                <div style={{display: 'flex', flexWrap: 'wrap', width: '100%', justifyContent: 'center', gap: '2vw', marginTop: '5vh'}}>
                    <ol>
                        <li className='longTexts'>Luka Doncic</li>
                        <li className='longTexts'>LeBron James</li>
                        <li className='longTexts'>Joel Embiid</li>
                        <li className='longTexts'>Kevin Durant</li>
                        <li className='longTexts'>Trae Young</li>
                        <li className='longTexts'>Karl-Anthony Towns</li>
                        <li className='longTexts'>Giannis Antetokounmpo</li>
                        <li className='longTexts'>Anthony Davis</li>
                        <li className='longTexts'>James Harden </li>
                        <li className='longTexts'>Damian Lillard</li>
                    </ol> 

                    <div className='cuadrosConInfo square'>
                        <img src={pairplotTop} alt="pairplot" style={{width: '45vw', height: 'auto', alignSelf: 'flex-start'}}/>
                        <p>Compara simultáneamente las principales estadísticas mostrando cómo se relacionan entre sí a través de todas sus temporadas. La visualización revela tanto las similitudes como las diferencias estilísticas entre estos jugadores top.</p>
                    </div>

                        <div className='cuadrosConInfo big'>
                            <img src={lineplotTop} alt="fisicos" style={{width: '36vw', height: 'auto', alignSelf: 'flex-start'}}/>
                            <p>Podemos ver el seguimiento de cada juagdor por cada una de las temporadas que jugó, la línea puede representar si se mantuvo estable, si mejoró o si empeoró. </p>
                        </div>
                        <div className='cuadrosConInfo big'>
                            <img src={ptsTop} alt="fisicos" style={{width: '36vw', height: 'auto', alignSelf: 'flex-start'}}/>
                            <p>Muestra la densidad de puntos que tuvo por partido en promedio por cada temporada. Un pico alto significa que la mayoría de sus jueugos tiene ese puntaje.</p>
                        </div>
                </div>

                

                <h3 style={{ marginTop: '5vh', fontSize: '2em', marginBottom: '1vh'}}>Top 5 mejores picks de todas las temporadas</h3>
                <p className='longTexts'>En cada inicio de temporada se hace un sorteo entro los 30 equipos para elegir a los nuevos jugadores que van a entrar a la liga. El turno 1, 2, 3... Son asigandos a los equipos aleatoriamente y cada uno elige conforme a su turno. Al equipo que le toco el turno 1 obviamente va a elegir al mejor prospecto y así sucesivamente.</p>

                <p className='longTexts'>Este ranking es sacado por mi, analizando la primera temporada que jugaron cada uno de los jugadores con el #1, #2 o #3 pick. La fórmula que utilicé para sacar a los mejores jugadores es la siguiente:</p>
                <p  style={{alignSelf: 'center', fontStyle: 'italic',}}>(puntos promedio en la temporada)*0.5 + (rebotes promedio en la temporada)*0.3 + (asistencias promedio en la temporada)*0.2 + (eficiencia de tiro)*0.3 </p>

                <div style={{display: 'flex', flexWrap: 'wrap', width: '100%', justifyContent: 'center', gap: '2vw', marginTop: '5vh'}}>
                    <div className='cuadrosConInfo'>
                        <h1 style={{margin: 0, alignSelf: 'center'}}>Top 5 #1 picks</h1>
                        <p className='textPicks'> ・ Shaquille O'Neal</p>
                        <p className='textPicks'> ・ Blake Griffin</p>
                        <p className='textPicks'> ・ Hakeem Olajuwon</p>
                        <p className='textPicks'> ・ Allen Iverson</p>
                        <p className='textPicks'> ・ Patrick Ewing</p>
                    </div>
                    <div className='cuadrosConInfo'>
                        <h1 style={{margin: 0, alignSelf: 'center'}}>Top 5 #2 picks</h1>
                        <p className='textPicks'> ・ Gary Payton</p>
                        <p className='textPicks'> ・ Alonzo Mourning	</p>
                        <p className='textPicks'> ・ Steve Francis</p>
                        <p className='textPicks'> ・ Keith Van Horn</p>
                        <p className='textPicks'> ・ Ja Morant</p>
                    </div>
                    <div className='cuadrosConInfo'>
                        <h1 style={{margin: 0, alignSelf: 'center'}}>Top 5 #3 picks</h1>
                        <p className='textPicks'> ・ Michael Jordan</p>
                        <p className='textPicks'> ・ Grant Hill</p>
                        <p className='textPicks'> ・ Luka Doncic</p>
                        <p className='textPicks'> ・ Anfernee Hardaway</p>
                        <p className='textPicks'> ・ Carmelo Anthony</p>
                    </div>

                    <div>
                        <h3 style={{ marginTop: '3vh', fontSize: '1.7em', marginBottom: '1vh', marginLeft: '2vw'}}>Desempeño de los picks #1, #2 y #3</h3>
                        <div className='cuadrosConInfo big'>
                            <img src={desempeñoStats} alt="fisicos" style={{width: '38vw', height: 'auto'}}/>
                        </div>
                    </div>

                    <div>
                        <h3 style={{ marginTop: '3vh', fontSize: '1.7em', marginBottom: '1vh', marginLeft: '2vw'}}>Físico de los picks #1, #2 y #3</h3>
                        <div className='cuadrosConInfo big'>
                            <img src={fisicoStats} alt="fisicos" style={{width: '38vw', height: 'auto'}}/>
                        </div>
                    </div>
                     <p className='longTexts'>Los resultados de las gráficas fueron seleccionando la primer temporada de cada uno de los jugadores y sacando un promedio de cada una de sus estadísticas. Se evaluaron poco más de 26 jugadores por pick (porque fueron 26 temporadas + los jugadores viejos que ya estaban en la liga antes de 1996).</p>
                </div>

                <h3 style={{ marginTop: '5vh', fontSize: '2em', marginBottom: '1vh'}}>Países y sus jugadores</h3>
                <p className='longTexts'>Esto es un resumen de la nacionalidad de todos los jugadores que estuvieron en esas temporadas en la NBA.</p>

                <div style={{display: 'flex', flexWrap: 'wrap', width: '100%', justifyContent: 'center', gap: '2vw', marginTop: '5vh'}}>
                    <div className='cuadrosConInfo small'>
                        <h2 style={{margin: 0, alignSelf: 'center'}}>Total de jugadores: 2551</h2>
                    </div>
                    <div className='cuadrosConInfo small'>
                        <h2 style={{margin: 0, alignSelf: 'center'}}>Jugadores de Estados Unidos: 2140</h2>
                    </div>
                    <div className='cuadrosConInfo small'>
                        <h2 style={{margin: 0, alignSelf: 'center'}}>Jugadores en el resto del mundo: 411</h2>
                    </div>

                    <div>
                        <h3 style={{ marginTop: '3vh', fontSize: '1.7em', marginBottom: '1vh', marginLeft: '2vw'}}>Mapa del mundo de jugadores</h3>
                        <div className='cuadrosConInfo large'>
                            <WorldMap />
                        </div>
                    </div>
                    <p className='longTexts'>En este mapa decidí excluir a Estados Unidos porque tiene a la mayoría de los jugadores, tantos que los demás países ni siquiera se marcaban. Entonces esto es solo un mapa de los jugadores que no son de Estados Unidos que juegan o jugaron en la NBA. </p>
                    
                    <div>
                        <h3 style={{  fontSize: '1.7em', marginBottom: '1vh', marginLeft: '2vw'}}>Alturas en los jugadores (interacional)</h3>
                        <div className='cuadrosConInfo big'>
                            <img src={alturasBox} alt="fisicos" style={{width: '36vw', height: 'auto', alignSelf: 'flex-start'}}/>
                            <p>Se puede ver la diferencia de altiuras que hay los países, aunque muchos comparten la misma media, podemos ver algunas peculiaridades en los outliers.</p>
                        </div>
                    </div>

                    <div>
                        <h3 style={{  fontSize: '1.7em', marginBottom: '1vh', marginLeft: '2vw'}}>Eficiencia por partido (internacional)</h3>
                        <div className='cuadrosConInfo big'>
                            <img src={eficienciaBox} alt="fisicos" style={{width: '36vw', height: 'auto', alignSelf: 'flex-start'}}/>
                            <p>Esta gráfica es interestante porque toma las eficiencias de los países, e igual, la mayoría tiene su media en el mismo rango pero EU es el único que tiene muchos outliers.</p>
                        </div>
                    </div>

                    <div>
                        <h3 style={{  fontSize: '1.7em', marginBottom: '1vh', marginLeft: '2vw'}}>Puntos por partido (internacional)</h3>
                        <div className='cuadrosConInfo big'>
                            <img src={puntosPPBox} alt="fisicos" style={{width: '36vw', height: 'auto', alignSelf: 'flex-start'}}/>
                            <p>Aquí los datos varían un poco más y de nuevo EU vuelve a tomar un rol importante al tener muchos jugadores en outliers positivos.</p>
                        </div>
                    </div>

                    <div>
                        <h3 style={{  fontSize: '1.7em', marginBottom: '1vh', marginLeft: '2vw'}}>Rebotes por partido (internacional)</h3>
                        <div className='cuadrosConInfo big'>
                            <img src={rebotesPPBox} alt="fisicos" style={{width: '36vw', height: 'auto', alignSelf: 'flex-start'}}/>
                            <p>Varían los datos parecido a los puntos, pero Francia tiene un poco más de precencia, podemos deducir que es por la altura de los jugadores (como está representado en la gráfica de alturas).</p>
                        </div>
                    </div>



                </div>


            </div>

            <div className='finalPage'>
                <div>
                    <h1 style={{ margin: 0, fontSize: '3.5em', alignSelf: 'flex-start', marginLeft: '10vw'}}>Universidades en diferentes equipos</h1>
                    <p className='longTexts' style={{ alignSelf: 'flex-start', marginLeft: '10vw', marginRight: '10vw'}}>Esta heatmap muestra la relación entre la cantidad de jugadores que salen de una universidad y se van directo a un equipo específico. Cada frame es una temporada diferente. Las universidades que están hasta arriba han tenido más jugadores que en algún punto juegan en la NBA que las universidades de abajo.</p>
                </div>

                <video
                    src={heatMapS}
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{ width: "60%", alignSelf: 'center' }}
                 />
                <BouncingBall/>
            </div>


        </div>
    )
}

export default Home
