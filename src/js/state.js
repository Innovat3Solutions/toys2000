// Simple PubSub state management
class State {
  constructor() {
    this.events = {};
    this._activeBrandId = null;
  }

  subscribe(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
  }

  publish(event, data) {
    if (this.events[event]) {
      this.events[event].forEach(callback => callback(data));
    }
  }

  get activeBrandId() {
    return this._activeBrandId;
  }

  setActiveBrand(brandId) {
    if (this._activeBrandId === brandId) return;
    this._activeBrandId = brandId;
    this.publish('activeBrandChanged', brandId);
  }
}

export const store = new State();
