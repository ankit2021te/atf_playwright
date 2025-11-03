import {test as base} from '@playwright/test';

let counter = 0;

type MyFixtures = {
    counterFixture:{};
}

const test = base.extend<MyFixtures>({
    counterFixture: [async ({},use)=>{
        counter++;
        await use(counter);
    },{scope:'test'}]
    
});

test ('Test 1', async ({counterFixture})=>{
    console.log(`Test 1 counter: ${counterFixture}`)
});

test ('Test 2', async ({counterFixture})=>{
    console.log(`Test 2 counter: ${counterFixture}`)
});

test ('Test 3', async ({counterFixture})=>{
    console.log(`Test 3 counter: ${counterFixture}`)
});