export class TemporalEngine {
  constructor() {
    this.timeline = [];
  }

  record(event, timestamp) {
    this.timeline.push({ event, timestamp });
  }

  query(start, end) {
    return this.timeline.filter(
      entry => entry.timestamp >= start && entry.timestamp <= end
    );
  }

  latest() {
    return this.timeline.length
      ? this.timeline[this.timeline.length - 1]
      : null;
  }
}
