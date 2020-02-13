class FeatureService {
  constructor() {
    this.features = [];
  }
  isEnabled = feature => this.features.includes(feature);
}

const featureService = new FeatureService();

export { featureService };
