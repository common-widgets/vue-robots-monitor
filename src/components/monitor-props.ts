export interface PointData {
  id: string
  x: number
  y: number
}
export interface PathData {
  srcPoint: string
  distPoint: string
  sp?: PointData
  dp?: PointData
}
export interface RobotData {
  id: string
  x: number
  y: number
  size: number
}
export interface MonitorData {
  points: PointData[]
  paths: PathData[]
  robots: RobotData[]
}