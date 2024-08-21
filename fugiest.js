const LOCAL_SINGLE_TIMEUNIT_INDEX = {
    hour: 3600,
    minute: 60,
    second: 1
};

const timeUnit = 'hour'; // You can change this to test different values

const result = !!LOCAL_SINGLE_TIMEUNIT_INDEX[timeUnit];

console.log(result); // true, because LOCAL_SINGLE_TIMEUNIT_INDEX['hour'] exists and is a truthy value
