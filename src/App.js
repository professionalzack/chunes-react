import React, { useState } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import TuneIndex from './components/TuneIndex';
import TuneShow from './components/TuneShow';
import Header from './components/Header';
import Library from './components/Library';
import Register from './components/auth/register';
import axios from 'axios';
import Login from './components/auth/login';


function App(async) {
  const [ currentUser, setCurrentUser ] = useState(localStorage.currentUser);
  const [library, setLibrary] = useState({
    style: {left:0},
  })
//   const [currentUser, setCurrentUser] = useState({name: 'Jackson', tunes:[{ title: 'Dance de Sta. Orosia',
//   meter: '2/4',
//   tunebody:
//    '|:GGGA|B2Bc|A2c2|B2dd|ddgd|e2AA|dddd|G2dd|ddgd|e2AA|\ndddd|G4|dddd|d2cc|c2e2|d2dd|dded|g2dd|ccBA|G2dd|\ndddd|d2cc|BBAA|1G4:|2G2\n dd|:cAdd|BGz d/2d/2|cAdd|\nB2zd/2d/2|cAdd|BGz d/2d/2|cAdd|G2GB|d>Bce|d2cc\n|B>BAA|G2GB|d>Bce|d2cc|B>BAA|1G2dd:|2G2\ne2|:e2ee|e2dd|c2dd|e2ee|eeee|e2dd\n|c2d2|c2e2|A2AA|c2e2|A4|e2d2|1c4-|c2e2:|2c6' },
// { title: 'Gozos de san Martín de Tours',
//   key: 'Dm',
//   tunebody:
//    'AAGFG2FA2G2|A2G2FGF2EDD2|DEF2FG2BAGA2|ABcAB2AG2F2|\n|:A2A2GFG2FA2G2|A2G2FGF2EDD2>|DEF2FG2BAGA2|ABcAB2AG2F2|\nAAGFG2FA2G2|A2G2FGF2EDD2|DEF2FG2BAGA2|ABcAB2AG2F2:|' },
// { title: 'la Culebra',
//   meter: '2/4',
//   tunebody:
//    '|:d>e/d/c/d/e/|dd/d/ de|dc cd|B/c/B/A/ GG:|\nc>d/cB|A2>A/B/|c>B/AB|G>G/GG|\nc>d/cB|A2>G/A/B/c/|d/e/d/c/BA|G2|' },
// { title: 'tran,tran, trala',
//   meter: '2/4',
//   tunebody:
//    '|:Gd|dBGd|dBGd|de^fe/2d/2|c2 \n  Dc|cADc|cADc|cded/2c/2|B2\n  Gd|dBGd|dBGd|de^fe/2d/2|c2 \n  Dc|cADc|cADc|cded/2c/2|B2 :|' },
// ]})

// try {
//   const result = await axios.get('http://localhost:8000/api/v1/tunes', {withCredentials: true});
//   console.log(result)
// } catch(err) {
//   console.log(err);
// }
// axios.get('http://localhost:8000/api/v1/tunes', {withCredentials: true} )
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// axios.get('http://localhost:8000/api/v1/users')
//    .then(response=>console.log(response))
axios.get('http://localhost:8000/api/v1/tunes')
   .then(response=>console.log(response))

const toggleLibrary = (e) =>{
    let tog = library.style.left === 0 ? {left:'-20vw'} : {left:0};
    setLibrary({
      ...library,
      style: tog
    })
  }

  const usertunes = [{ title: 'Dance de Sta. Orosia',
  meter: '2/4',
  tunebody:
   '|:GGGA|B2Bc|A2c2|B2dd|ddgd|e2AA|dddd|G2dd|ddgd|e2AA|\ndddd|G4|dddd|d2cc|c2e2|d2dd|dded|g2dd|ccBA|G2dd|\ndddd|d2cc|BBAA|1G4:|2G2\n dd|:cAdd|BGz d/2d/2|cAdd|\nB2zd/2d/2|cAdd|BGz d/2d/2|cAdd|G2GB|d>Bce|d2cc\n|B>BAA|G2GB|d>Bce|d2cc|B>BAA|1G2dd:|2G2\ne2|:e2ee|e2dd|c2dd|e2ee|eeee|e2dd\n|c2d2|c2e2|A2AA|c2e2|A4|e2d2|1c4-|c2e2:|2c6' },
{ title: 'Gozos de san Martín de Tours',
  key: 'Dm',
  tunebody:
   'AAGFG2FA2G2|A2G2FGF2EDD2|DEF2FG2BAGA2|ABcAB2AG2F2|\n|:A2A2GFG2FA2G2|A2G2FGF2EDD2>|DEF2FG2BAGA2|ABcAB2AG2F2|\nAAGFG2FA2G2|A2G2FGF2EDD2|DEF2FG2BAGA2|ABcAB2AG2F2:|' },
{ title: 'la Culebra',
  meter: '2/4',
  tunebody:
   '|:d>e/d/c/d/e/|dd/d/ de|dc cd|B/c/B/A/ GG:|\nc>d/cB|A2>A/B/|c>B/AB|G>G/GG|\nc>d/cB|A2>G/A/B/c/|d/e/d/c/BA|G2|' },
{ title: 'tran,tran, trala',
  meter: '2/4',
  tunebody:
   '|:Gd|dBGd|dBGd|de^fe/2d/2|c2 \n  Dc|cADc|cADc|cded/2c/2|B2\n  Gd|dBGd|dBGd|de^fe/2d/2|c2 \n  Dc|cADc|cADc|cded/2c/2|B2 :|' },
]
  // const tunesList = [
  //   {title:'Bank of Ireland'}, {title:'Battering Ram'}, {title:'Behind the Haystack'}, {title:'Blackthorn Stick'}, {title:"Brenda Stubbert's"}, {title:"Chief O'Neils Favorite"}, {title:'Cliffs of Moher'}, {title:'Concertina Reel'}, {title:'Congress Reel'}, {title:"Cannaughtman's Rambles"}, {title:'Convenience Reel'}, {title:"Cooley's Reel"}, {title:'Crabs in the Skillet'}, {title:'Cup of Tea'}, {title:"Dennis Murphy's Slide"}, {title:'Dick Gossip'}
  // ]

  const tunesList = [ { title: 'El Chinchecle',
  danse: 'bourrée',
  meter: '2/4',
  key: 'C',
  tunebody:
   '|:C2|G2 GA GF|E2E2F2|D2D2G2|E2E2C2|G2 GA GF|E2E2F2|\nD2D2G2|C4:|\n|:G2|c4 c2|BG F2F2|G4 A2|A2G2G2|c4 c2|BG F2F2|G4A2|\nA2G2G2|A4 G2|F2D2D2|G4 F2|E2C2C2|E2EDC2|G2G2G2|\nF2E2D2|E2C2C2|E2EDC2|G2G2G2|F2E2D2|C4:|\nz2|:A2|G2C2G2 FE|F2 ED C2C2|D2E2F2 ED|E2G2F2E2|\nE2G2F2D2|C4:|' },
{ title: 'Albada (la Virgen de Pineta)',
  danse: 'aire',
  meter: '3/4',
  key: 'C',
  tunebody:
   'e2eggg|f2eggf|eag2>a|gfeag2|\ne2eggg|f2eggf|edc4|\ne2eggg|f2eggf|edc4' },
{ title: 'Dance de Sta. Orosia',
  meter: '2/4',
  tunebody:
   '|:GGGA|B2Bc|A2c2|B2dd|ddgd|e2AA|dddd|G2dd|ddgd|e2AA|\ndddd|G4|dddd|d2cc|c2e2|d2dd|dded|g2dd|ccBA|G2dd|\ndddd|d2cc|BBAA|1G4:|2G2\n dd|:cAdd|BGz d/2d/2|cAdd|\nB2zd/2d/2|cAdd|BGz d/2d/2|cAdd|G2GB|d>Bce|d2cc\n|B>BAA|G2GB|d>Bce|d2cc|B>BAA|1G2dd:|2G2\ne2|:e2ee|e2dd|c2dd|e2ee|eeee|e2dd\n|c2d2|c2e2|A2AA|c2e2|A4|e2d2|1c4-|c2e2:|2c6' },
{ title: 'Gozos de san Martín de Tours',
  key: 'Dm',
  tunebody:
   'AAGFG2FA2G2|A2G2FGF2EDD2|DEF2FG2BAGA2|ABcAB2AG2F2|\n|:A2A2GFG2FA2G2|A2G2FGF2EDD2>|DEF2FG2BAGA2|ABcAB2AG2F2|\nAAGFG2FA2G2|A2G2FGF2EDD2|DEF2FG2BAGA2|ABcAB2AG2F2:|' },
{ title: 'la Culebra',
  meter: '2/4',
  tunebody:
   '|:d>e/d/c/d/e/|dd/d/ de|dc cd|B/c/B/A/ GG:|\nc>d/cB|A2>A/B/|c>B/AB|G>G/GG|\nc>d/cB|A2>G/A/B/c/|d/e/d/c/BA|G2|' },
{ title: 'tran,tran, trala',
  meter: '2/4',
  tunebody:
   '|:Gd|dBGd|dBGd|de^fe/2d/2|c2 \n  Dc|cADc|cADc|cded/2c/2|B2\n  Gd|dBGd|dBGd|de^fe/2d/2|c2 \n  Dc|cADc|cADc|cded/2c/2|B2 :|' },
{ title: 'Mudanza de palos de Jaca',
  meter: '2/4',
  tunebody:
   '    d2e2|d2cBA2d2|d4 d2e2|d2cBA2d2|G4 \ndcBc|:d2d2edce|d4 cBAB|AAAAdddd|G4 \ndcBc| d2d2edce|d4 cBAB|AAAAdddd|G4 dcBc:|G4' },
{ title: 'Tariran',
  meter: '3/4',
  tunebody:
   'G2G2EF|G2G2EF|GAFGEF|DEFGE2|C2 (3DEFED|F2EGD2|\nC2 (3DEFEC|(3DEFEC(3ABc|G2G2EF|GAFGEF|DEFGE2|\nC2c/B/A/G/F/E/D/C/|(3DEFG2F/E/D/C/\n|B,DC4' },
{ title: 'Entrada de gaita',
  meter: '2/4',
  tunebody:
   'zG|dd cB|c2 d2| B/2c/2B/2A/2 GG|dd cB|c2 (6dedcBA|\n_B2> G/2A/2|=B2 c/2B/2A/2G/2|A2 d2|\nB/2c/2B/2A/2 GG/2A/2|B c/2B/2A/2G/2|A2 d2|G2' },
{ title: 'Recogida de los mozos',
  meter: '6/8',
  tunebody:
   'GAB|c2c d2d|B2B GAB|c2c cBc|1d2>:|2G2> \n|:d2d|c2c B2B|GAB c2c|cBc d2>-|d2z  \nGAB|c2c d2d|B2B GAB|c2d cBA|1G2>:|' },
{ title: 'El Ofertorio (Dance de Sariñena)',
  tunebody:
   'N:G2(3GABG2(3GAB|\nN:G2(3GABGAFG|FE/2D/2EFED/2C/2DE|DC/2B,/2CDC2CD|E2F2ED/2C/2DE|\nG2G2(3GAB|G2(3GABG2(3GAB|GAFGFE(3FEF|G2(3GABG2(3GAB|\nG2(3GABGAFG|FE/2D/2EFED/2C/2DE|DC/2B,/2CDC2CD|E2F2ED/2C/2DE|\nDC/2B,/2CDC>D/2CD|E2F2ED/2C/2DE|DC/2B,/2CDC2CD|G2(3GABG2(3GAB|\nG2(3GABGAFG|\nG2(3GABG2(3GAB|G2(3GABGAFG|\nFE/2D/2EFED/2C/2DE|DC/2B,/2CDC2CD|G2G2(3GABG2|\n(3GABG2(3GABGA|FGFE/2D/2EFEF|\nG2(3GABG2(3GAB|\nG2(3GABGAFG|FE/2D/2EFED/2C/2DE|DC/2B,/2CDC2CD|E2F2ED/2C/2DE|\nDC/2B,/2CDC>D/2CD|E2F2ED/2C/2DE|DC/2B,/2CDC2CD|G2(3GABG2(3GAB|\nG2(3GABGAFG|FE/2D/2EFEFG2|(3GABG2(3GABG2| (3GABGAFGFE/2D/2|EFED/2C/2DEDC/2B,/2|\nCDC2CD|\n|E2F2ED/2C/2DE|DC/2B,/2CDC>D/2CD|E2F2ED/2C/2DE|' },
{ title: 'Cuidando las ovejas',
  meter: '2/4',
  key: 'Cm',
  tunebody:
   'g2(3fgfe2(3ded|c2>fgagf|e2efdcde|c2>ggagf|e2efdcde|c4c2cd\n|:(3e2e2g2f2d2|e2e2c2cd|(3e2e2g2f2d2|e2e2gagf|e2efe2d2|c2c2cBcd|\ne2egfedf|e4cBcd|e2egfedf|e2>fgagf|e2efdcde|c2>ggagf|e2f2dcde \n1|c4c2cd :|2c6' },
{ title: 'Melodía de gaita para procesión',
  meter: '2/4',
  tunebody:
   '  gcga|e2eg dfed|c4 gcga|e2eg dfed|c2>\nd cBcd|e2f2 gcgf|e4 cBcd|e2f2 gcgf|e4\n  gcga|e2eg dfed|c4 gcga|e2eg dcde|c2>\nd cBcd|e2f2 gcgf|e4' },
{ title: 'Melodía de gaita para la procesión, 2',
  meter: '2/4',
  tunebody:
   'cBcd|e2ef g2gf|e4 cBcd|e2ef g2gf|e4\ngagf|e2f2 dcde|c4 gagf|e2f2 dcde|c4\ncBcd|e2e2 gagf|e4 cBcd|e2e2 gagf|e4\ngagf|e2f2 dcde|c4 gagf|e2f2 dcde|c4' },
{ title: 'Rogativa de agua de Alcolea de Cinca',
  meter: 'C',
  tunebody: 'F>F/2FFE2F2|F>F/2FFE2F2|\nF>F/2FFE2F2|F>F/2FFE2F2|' },
{ title: 'Rogativa de La Puebla de Castro',
  meter: 'C',
  key: 'Gm',
  tunebody:
   ' G2^FG B2GB|A2D6|G2^FG B2GB|A2D6\n|:d2dd dBdf|ed c6|B2Bc A2BA|G-^F G6:|' },
{ title: 'El Arrastrat',
  meter: '6/8',
  tunebody:
   '|:G2A|B>A/2B c2d|B>A/2G d>c/2d|B>A/2G A>B/2c|d3\n  e2e|d2d c>d/2c| B>A/2G d>c/2d|B>A/2G A>G/2^F|G3:|\n|:e2e|d2d c>d/2c| B>A/2G d>c/2d|B>A/2G A>G/2^F|G3:|' },
{ title: 'El Rápido',
  meter: '2/4',
  tunebody:
   '|:G|(3ccc cd|e>d/2 ce|(3edc (3ede|c3 \n  G|(3ccc cd|e>d/2 ce|(3edc (3ede|c2-(3cde|\n(3ddd (3dcB|A>G/2 Gc|(3BAG Ad|G2-(3GAB|(3ccc (3dcB| \nA>G/2 Gc|(3BAG Ad|c2 z:|' },
{ title: 'El Cruce',
  meter: '2/4',
  tunebody:
   '|:zB|G>F/2 GA|B>d/2 BG|d>e/2 (3dce|d3\n   B|G>F/2 GA|B>d/2 BG|d>e/2 (3dce|d2\n(3BBc|Td2 Me(3dcd|B2 (3GGA|BcdB|G3 G\n     |Td2 Me(3dcd|B2 (3GGA|BcdB|G2:|' },
{ title: 'Las Varas',
  meter: '2/4',
  tunebody: 'A>B/2ce|B2(3dcB|A2^G2|A>B/2ce|B2 (3eee|1B4:|2A4' },
{ title: 'Danza 1 de Yebra',
  meter: '2/4',
  tunebody:
   'G2G2|BcBc d2>c|B4 efef|dcBc (3A2A2A2|G4 \n  ecBc|d4 ecBc|d4 efef|dcBc (3d2d2d2|G4' },
{ title: 'Danza 2 de Yebra',
  meter: '2/4',
  tunebody:
   'e2|edBc A2Bc|d2d2 BcBc|B4 B2ef|dcBc A4|B2Bc dddd|G4 \nBcBc|A4 BcBc|A4 efef|dcBc A2B2|G4 :|' },
{ title: 'polca',
  danse: 'polka',
  meter: '2/4',
  key: 'Cm',
  tunebody:
   'zB|e2>d c2>B|A2A2 A2zB|d2>c B2>A|G2G2 G2\nzB|e2e2 e2zB|d2d2 d2Bc|d2dc BAGF|E4-E2z2|\nG2B2A2G2|F2ccc2zA|F2ddd2(3cdc|B2eee2z2|\nG2B2A2G2|F2ccc2z2|B2dc BAGF|E4-E2:|' },
{ title: 'Tatero (cambio de Mayordomos)',
  meter: '2/4',
  tunebody:
   'g2f|ede fef gfg|a2g fef agf|1g2> ez2:|2ez5\ng2f|ede fef gfg|a2g fef agf|1g2> ez2:|2e2 ' },
{ tunebody:
   ':z2 cc|c2BB B2AA|A2G2 z2GG|A2AA B2BB|d2c2\n z2 cc|c2BB B2AA|A2G2 z2GG|A2AA B2BB|c4:|' },
{ title: 'Habanera',
  meter: '2/4',
  key: 'Bphr',
  tunebody:
   'BB(3cAc (3dBd|(3e/2e/2ee (3dBd|(3cAc (3BGB|\n  (3cAc (3dBd|(3e/2e/2ee (3dBd|(3cAc (3B>B/2B\n(3AFA (3GEG|(3FDF (3ECE|(3DAA (3BGB|\n(3AFA (3GEG|(3D<D/2D (3ZBB\n  (3cAc (3dBd|(3e/2e/2ee (3dBd|(3cAc (3BGB|\n  (3cAc (3dBd|(3e/2e/2ee (3dBd|(3cAc (3B>B/2B' },
{ title: 'Polca Piqué',
  meter: '2/4',
  key: 'G',
  tunebody:
   'B2|d2 B/c/B/A/|BG B2|d2 B/c/B/A/G2:|\nDB|BB BA/B/|cA DA|AA AG/A/|BG \nDB|BB BA/B/|cA Ae|dc BA|G2:|' },
{ title: 'El Baile de los Pañuelos',
  meter: '2/4',
  tunebody:
   'G |cc/B/ AA/G/|FF/E/ DG|E>D/ C2|c>B/ cd|e2 e/d/e/f/|g2 zg|\ng |cc/B/ AA/G/|FF/E/ DG|E>D/ C2|c>B/ cd|e2 de/d/|c2 z:|' },
{ title: 'Principio tienen las cosas...',
  tunebody: '|:ccccB2BA2G-G  ABcAB2BA2-G-G:|' },
{ title: 'De los Altos Pirineos...',
  meter: '2/4',
  tunebody:
   'E2 EE|A2 ^GA|c2B2|d2 cB|A2 ^GA|c2B2|\ne2 ee|e2dB|A2^G2|A2 Bc|e2 dB|A2A2-|A2:|\n|:z2EA|AA^GA|B^GBd|cA^GA|B/-c/-B/-^G\n  BB|Beee|A{B/A/}^GAA|dBA^G|A4:|' },
{ title: 'Agueda flor de las flores',
  meter: '7/8',
  key: 'D',
  tunebody: 'FAAAB2>|AG-FA4:|\nddcBA2>|A(3BAG F4|GABcA2>|A(3BAG F4' },
{ title: 'Albada de Sinués',
  meter: 'C',
  key: 'g',
  tunebody:
   'G2GD G2GA|BBB2 c2dc|B2AG B4|B2cd B2BA|\nG2F2 A2Bc|A{B-A}GFA G4|\nd2dd c2BA|G2F2 G2AB|c-AFA G4:|' },
{ title: 'Triste LLanto', tunebody: 'G2 E-F G2 ECDE-G-F E2||' },
{ title: 'Salve a la Virgen de los Dolores',
  key: 'G',
  tunebody: 'GBBBA2A2 BAGFG-FE4:|' },
{ title: 'Salve Dolorosa',
  meter: 'C',
  tunebody:
   'AA^GB|A2E2|E/E/E/E/AB/-^G/|A2EE|^F^GAB/-G/|\nA2 c>B/|d/-B/ A B/-^G/ E|\nA2 c>B/|d/-B/ A B/-^G/ E|A2' },
{ title: 'Gozos de S. Fabián y S. Sebastián',
  tunebody: 'C2G2GAAEFDFE4:|' },
{ title: 'Gozos a la Virgen de Chalamera',
  tunebody: 'A>G/G/F/F/F/G>F/F/>G/4F/4E4:|' },
{ title: 'Gozos a la Virgen de Pineta',
  key: 'Dm',
  tunebody: 'A2G2FAGEFED4:|' },
{ title: 'Gozos de tamarite',
  meter: ' 3/4',
  tunebody:
   'GEAG|c(3B/A/G/G^F|^FGAB-|BcBA|G2|\n|:GA/B/cG/G/cB|BAdc/A/|AG/c/AB|c4\nC2A|A2G|FGA|A2D|D2B|B2A|GAB|=B2E|c/c/=BA|\nAGF|E2D|G2>|EG>E/|G^F2|^FA>F/|AG2|\nB/B/AG|c2C|A2G|F2E/F/|^FGA/G/|F2>|\nBAG|AG2|ccc|=B2^G|=B2A|^G2>|\nccc|=B2^G|^G2^F|E2>:|' },
{ title: 'Gozos a S. Isidro (Balldellou)',
  tunebody:
   'G2|c2BdcA|A2G2\nG2|c2BdcA|G4\nE2|G2FEFG|EDC2\nE2|G2FEFD|C4:|' },
{ title: 'Gozos de s. Visorio', tunebody: 'cBA/c/B/A/G/B/A2:|' },
{ title: 'Copla de Fiesta',
  meter: '3/8',
  key: 'G',
  tunebody: 'zE>F/|GB>B/|AG2|BGB|AG2|\nzE>F/|GB>B/|AG2|AA>G/|FE2:|' },
{ title: 'Coplilla a s. Sebastián',
  tunebody:
   'B2B2B2B2G2c2c2B2B-B/c/B/A/A>G/G4:|\nB2B2B2B2G2c2c2B2B-B/c/B/A/A>G/G4:|' },
{ title: 'jota de baile',
  meter: '3/8',
  key: 'Dloc',
  tunebody:
   'z=Bc|(4ddc=B|d-(3d/e/d/c/=B|c2>|\nz ee|(4eBBB |c-(3c/d/c/=B/c/|d3|\nz=Bc|(4ddc=B|d-(3d/e/d/c/=B|c2>|\nz ee|(4eBBB |c-(3c/d/c/=B/c/|d3| \nz=Bc|(4ddc=B|d-(3d/e/d/c/=B|c2>|\nz ee|(4eBBB |A-(3A/B/A/G/F/|G3|\nz=Bc|(4df=ed|f(3f/g/f/=e/d/|=e3-|=ezz|' } ]
  return (
    <div className="App">
      {/* <h1>this is the app</h1> */}
      <Header />
      <section className="nonheader">
        <div className="sidebar" style={library.style}>
          <div className="pull-tab" onClick={toggleLibrary}></div>
          <Library className="sidebar" tunes={usertunes} />
        </div>
        <div className="main-area">
          <Switch>
            <Route exact path='/' render={props=><TuneIndex tunes={tunesList}/>}/>
            <Route path='/tune/:tuneId' render={props=><TuneShow {...props} tunes={tunesList}/>}/>
            <Route path='/register' component={Register} />
            <Route path='/login' render={(props) => <Login {...props} setCurrentUser={setCurrentUser} />} />          </Switch>
        </div>
      </section>
    </div>
  );
}

export default withRouter(App);
