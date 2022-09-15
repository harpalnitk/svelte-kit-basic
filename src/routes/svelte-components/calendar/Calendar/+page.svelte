<script>
    throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");

	//To turn date to red color if it has an appointment scheduled
export let schedule;

const date = new Date();

const today = {
    dayNumber: date.getDate(),
    month: date.getMonth(),
    year: date.getFullYear()
};

const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];
let monthIndex = date.getMonth();
$: month = monthNames[monthIndex];
let year = date.getFullYear();

$: firstDayIndex = new Date(year, monthIndex, 1).getDay();
//0 means give the last day of previous month; 1 added to month index to get
//the last day of current month
$: numberOfDays = new Date(year, monthIndex + 1, 0).getDate();

let currentDay = date.getDate();

$: calendarCellsQty = firstDayIndex <= 4 ? 35 : 42;

const goToNextMonth = () => {
    if (monthIndex >= 11) {
        year += 1;
        return (monthIndex = 0);
    }
    return (monthIndex += 1);
};

const goToPrevMonth = () => {
    if (monthIndex <= 0) {
        year -= 1;
        return (monthIndex = 11);
    }
    return (monthIndex -= 1);
};

$: console.log(
    `${month}, ${currentDay}, ${year}, FIRST DAY index is ${firstDayIndex}, MONTH index is ${monthIndex}, No. of days: ${numberOfDays}`
);
</script>

<main>
    <div class="month">
        <ul class='row'>
            <li class="prev" on:click={goToPrevMonth}>&#10094;</li>
            <li class='row-text'><span>{month}</span><span>{year}</span></li>
            <li class="next" on:click={goToNextMonth}>&#10095;</li>
            
        </ul>
    </div>

    <ul class="weekdays">
        <li>Su</li>
        <li>Mo</li>
        <li>Tu</li>
        <li>We</li>
        <li>Th</li>
        <li>Fr</li>
        <li>Sa</li>
    </ul>

    <ul class="days">
        {#each Array(calendarCellsQty) as _, i}
            {#if i < firstDayIndex || i >= numberOfDays + firstDayIndex}
                <li>&nbsp;</li>
            {:else}
                <li
                    class:active={i === today.dayNumber + (firstDayIndex - 1) &&
                        monthIndex === today.month &&
                        year === today.year}
                on:click
				data-dateID={`${month}_${i - firstDayIndex + 1}_${year}`}
				class:has-appts={`${month}_${(i-firstDayIndex)+1}_${year}` in schedule}
				>
                    {i - firstDayIndex + 1}
                </li>
            {/if}
        {/each}
    </ul>
</main>

<style lang="scss">
	@import '../../../styles/vars';

	
	ul {
		list-style-type: none;
	}

	/* Month header */
	.month {
		padding: 1rem 2.5rem;
		background: $primary-color;
		 text-align: center;
	}

	/* Month list */
	.month ul {
        display:flex;
        justify-content: space-between;
        align-items: center;
	}

	.month ul li {
		color: white;
		 font-size: 1.5rem;
		text-transform: uppercase;
		letter-spacing: 3px;
	}

    .row-text{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

	/* Previous button inside month header */
	.month .prev {
		cursor: pointer;
		transition: all 0.2s ease;
		&:hover {
			opacity: 0.7;
		}
		&:active {
			transform: scale(0.8);
		}
	}

	/* Next button */
	.month .next {
		cursor: pointer;
		transition: all 0.2s ease;
		&:hover {
			opacity: 0.7;
		}
		&:active {
			transform: scale(0.8);
		}
	}

	/* Weekdays (Mon-Sun) */
	.weekdays {
		margin: 0;
		padding: 10px 0;
		background-color: #ddd;
		display: grid;
		grid-template-columns: repeat(7, 1fr);
	}

	.weekdays li {
		display: inline-block;
		// width: 13.6%;
		color: #666;
		text-align: center;
	}

	/* Days (1-31) */
	.days {
		padding: 0;
		background: #eee;
		margin: 0;
		display: grid;
		grid-template-columns: repeat(7, 1fr);
		border: 0 solid black;
		border-width: 0 0 1px 1px;
	}

	.days li {
		list-style-type: none;
		display: inline-block;
		border: 0 solid black;
		border-width: 1px 1px 0 0;
		padding: 9px 0 9px 0;
		// width: 13.6%;
		text-align: center;
		// margin-bottom: 1px;
		font-size: 1.2rem;
		color: #777;
		cursor: pointer;
	}

	/* Highlight the "current" day */
	.days li.active {
		// padding: 5px;
		background: $tertiary-color;
		color: white;
	}

	.days li.has-appts {
		color: #F2480A;
	}
</style>