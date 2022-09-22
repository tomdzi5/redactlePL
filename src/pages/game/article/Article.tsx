import { useEffect } from 'react';
import { Card, CardContent, Typography } from '@mui/material';

import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { getArticle, selectArticle } from './articleSlice';
import { LOADING_STATUS } from '../../../utils/constants';
import Loader from '../../../components/Loader';
import { styled } from '@mui/material/styles';

const ArticleCard = styled(Card)`
  flex-basis: 70%;
`

const Article = () => {
    const article = useAppSelector(selectArticle);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getArticle());
    }, [])

    return (
        <ArticleCard>
            <CardContent>
                { article.status === LOADING_STATUS.IDLE && <>
                    <Typography variant="h2">{article.data.title}</Typography>
                    <div>{article.data.text}</div>
                </>}
                { article.status === LOADING_STATUS.LOADING && <Loader/>}
            </CardContent>
        </ArticleCard>
    )
}

export default Article;