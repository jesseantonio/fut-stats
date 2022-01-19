export interface Team {
  id: number;
  uid: number;
  location: string;
  name: string;
  abbreviation: string;
  displayName: string;
  shortDisplayName: string;
  isActive: true;
  logos: [
    {
      href: string;
      width: number;
      height: number;
      lastUpdated: string;
    }
  ];
}
