import React, { useEffect } from 'react';
import {Typography, Box, Grid, Button} from '@material-ui/core';
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';
import ModelPostagem from '../../components/postagens/modalPostagem/ModelPostagem';
import './Home.css';
import { useHistory } from 'react-router';
import useLocalStorage from 'react-use-localstorage';

function Home() {

    let history = useHistory();
    const [token, setToken] = useLocalStorage('token');

    useEffect(() => {
        if (token === "") {
            alert("Você precisa estar logado")
            history.push("/login")
        }
    }, [token])
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                    <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo' >Seja bem vindo(a)!</Typography>
                    <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>Expresse aqui os seus pensamentos e opiniões!!! </Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        <ModelPostagem />
                        </Box>
                        <Button variant="outlined" className="botao">VER POSTAGENS</Button>
                    </Box>
                </Grid>
                <Grid item xs={6}  >
                    <img src="https://i.imgur.com/v1AVNnv.jpg" alt="Imagem do desenho de um cinema com poltronas vermelhas e uma tela na parede" width="350px" height="300px" />
                </Grid>
                <Grid xs={12} className="postagens">
                    <TabPostagem/>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;