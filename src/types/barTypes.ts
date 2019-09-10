export interface barDataType {
    labels: Array<Number>,
    datasets: Array<dataSet>
}

export interface dataSet {
    label?: String,
    backgroundColor: String,
    data: Array<Number>
}