/**
 * Meeting Rooms I

Given an array of meeting time intervals where each interval is represented as [start, end], determine if a person could attend all meetings without any overlaps.

Example:

Input: intervals = [[0, 30], [5, 10], [15, 20]]
Output: false
Explanation: The meeting [0, 30] overlaps with [5, 10].


 */

function canAttendMeetings(intervals) {
	let orderIntervals = intervals.sort((a, b) => a[0] - b[0])
	console.log(orderIntervals)
	for(let i = 0; i < intervals.length - 1; i++){
		if (orderIntervals[i + 1][0] < orderIntervals[i][1])
			return false
	}
	return true;
}

// let isOverLap = canAttendMeetings([[15, 20], [0, 30], [5, 10]])
let isOverLap = canAttendMeetings([[1, 5], [6, 10], [12, 15], [16, 20]])

console.log(isOverLap);
