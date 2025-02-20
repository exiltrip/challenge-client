'use server';

import { revalidatePath } from 'next/cache';

export async function completeDailyChallenge(challengeId: number) {

    // Здесь надо будет ходить к апи что бы получать дейлик, пока что не оч рабочий вариант
    // await fetch('http/://localhost:8080/daily-challenge/get', {
    //   method: 'POST',
    //   body: JSON.stringify({ id: challengeId, userId: 1 })
    // });
    revalidatePath('/daily-challenge');
}
