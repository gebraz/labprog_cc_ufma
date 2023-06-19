package com.dummy.exemplo;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import jakarta.websocket.server.PathParam;

@RestController
@RequestMapping("/api/programa")
public class Exemplo {

    @GetMapping("/indicadores")
    public ResponseEntity obterIndicadores(@RequestParam("programa")String programa,
                                          @RequestParam("anoIni")String anoInicial, 
                                          @RequestParam("anoFim")String anoFinal) {
                                            
        Indicadores ind;
        if (programa.equals("1"))
            ind = new Indicadores("17,43", "16,45", "0,99", "220");
        else 
            ind = new Indicadores("21,43", "18,45", "7,99", "530");
        
            return new ResponseEntity(ind, HttpStatus.OK);
    }


}
