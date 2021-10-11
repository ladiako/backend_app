package com.project.re.Dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.ToString;

@Data
@ToString
@AllArgsConstructor
public class TransactionNbSerach {
    private String date;
    private String label;
    private long nbrT;
}
