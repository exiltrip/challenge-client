import { Container } from '@widgets/Container';
import { DailyChallengeCard } from './DailyChallengeCard';
import { fetchDailyChallengeData } from '../api/FetchDailyChallenge';

export default async function DailyChallengePage() {
    const dailyChallenge = await fetchDailyChallengeData();

    return (
        <Container>
            <DailyChallengeCard
                id={dailyChallenge.id}
                text={dailyChallenge.text}
                completedCount={dailyChallenge.completedCount}
                isCompleted={dailyChallenge.isCompleted}
            />
        </Container>
    );
}
