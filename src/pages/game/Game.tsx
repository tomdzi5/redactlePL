import Header from './header';
import Article from './article';
import GuessBar from './guess-bar';
import { useAppDispatch } from '../../app/hooks';
import { setGuessText } from './guess-bar/guessSlice';
import {
    ArticleCard,
    ArticleContainer,
    StyledCard,
    StyledGrid,
} from './Game.styled';

const Game = () => {
    const dispatch = useAppDispatch();
    const handleGuess = (guessText: string): void => {
        dispatch(setGuessText(guessText));
    };

    return (
        <>
            <Header />
            <ArticleContainer>
                <StyledGrid
                    container
                    sx={{ flexDirection: { xs: 'column', md: 'row' } }}
                >
                    <ArticleCard>
                        <Article />
                        <GuessBar
                            onGuess={(guessText) => handleGuess(guessText)}
                        />
                    </ArticleCard>
                    <StyledCard>guess list</StyledCard>
                </StyledGrid>
            </ArticleContainer>
        </>
    );
};

export default Game;
