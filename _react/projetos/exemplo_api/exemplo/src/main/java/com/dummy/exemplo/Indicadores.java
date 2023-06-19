package com.dummy.exemplo;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Indicadores {
    String iGeral;
    String iRestrito;
    String iNaoRestrito;
    String totalProd;

}
